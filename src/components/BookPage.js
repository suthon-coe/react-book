import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import BookAPI from '../api';
import BookDetail from './BookDetail';

const BookItem = ({title, primary_isbn13, match}) => (
    <div><Link to={`${match.url}/${primary_isbn13}`}>{title}</Link></div>
)

class BookPage extends Component {
    constructor(props){
        super(props)
        this.state = {books: []}
    }
    componentDidMount(){
        this.startFromBookPage = this.props.match.isExact;
        (async() => {
            let books = await BookAPI.getBooks(this.props.match.params.list_name_encoded)
            this.setState({books})
        })()        
    }
    handleModalClose = () => {
        console.log(this.startFromBookPage)
        if(this.startFromBookPage){
            this.props.history.goBack()
        }else{
            this.props.history.replace(this.props.match.url)
        }
    }

    renderBookDetail = (props) => {
        return (<BookDetail onModalClose={this.handleModalClose} {...props} list_name_encoded={this.props.match.params.list_name_encoded}/>)
    }
    render() {
        return (
            <div>
                <div>Book from {this.props.match.params.list_name_encoded}</div>
                {
                    this.state.books.map(b => <BookItem {...b} match={this.props.match} key={b.primary_isbn13}/>)
                }
                <Route path={`${this.props.match.url}/:primary_isbn13`} 
                    render={this.renderBookDetail}/>
            </div>
        );
    }
}

export default BookPage;
