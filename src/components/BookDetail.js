import React, { Component } from 'react';
import { Modal, ModalBackground, ModalContent, ModalClose, Card, CardContent, Media, Content, Image, Title, Subtitle, MediaContent, MediaRight } from 'bloomer';
import BookAPI from '../api';
import _ from 'lodash';

class BookDetail extends Component {
    constructor(props){
        super(props)
        this.state = {book: null};
    }
    componentDidMount(){
        (async ()=>{
            let books = await BookAPI.getBooks(this.props.list_name_encoded)
            let primary_isbn13 = this.props.match.params.primary_isbn13
            this.setState({book: _.find(books, ['primary_isbn13', primary_isbn13])})
        })()        
    }

    render() {
        let book = this.state.book;
        if(!book){
            return (<div></div>);
        }
        
        return (
            <Modal isActive={true}>
                <ModalBackground onClick={this.props.onModalClose}/>
                <ModalContent>                    
                    <Card>
                        <CardContent>
                            <Media>                                
                                <MediaContent style={{height: '200px'}}>
                                    <Title isSize={3}>{book.title}</Title>
                                    <Subtitle isSize={6}>{book.author}</Subtitle>
                                </MediaContent>
                                <MediaRight>
                                    <img src={book.book_image} style={{height: '200px'}}/>
                                </MediaRight>
                            </Media>
                            <Content>
                                {book.description}
                                <br/>
                                <small>{book.publisher}</small>
                            </Content>
                        </CardContent>
                    </Card>
                </ModalContent>
                <ModalClose onClick={this.props.onModalClose}/>
            </Modal>
        );
    }
}

export default BookDetail;
