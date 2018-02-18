import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import BookAPI from '../api';
const BookItem = ({title}) => (
    <div>{title}</div>
)
class BookPage extends Component {
    constructor(props){
        super(props)
        this.state = {books: []}
    }
    componentDidMount(){
        let books = BookAPI.getBooks(this.props.match.params.list_name_encoded)
        this.setState({books})
    }
    render() {
        return (
            <div>
                <div>Book from {this.props.match.params.list_name_encoded}</div>
                {
                    this.state.books.map(b => <BookItem {...b}/>)
                }
            </div>
        );
    }
}

export default BookPage;
