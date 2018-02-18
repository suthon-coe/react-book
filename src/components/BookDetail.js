import React, { Component } from 'react';
import { Modal, ModalBackground, ModalContent, ModalClose, Box } from 'bloomer';

class BookDetail extends Component {
    handleModalClose = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <Modal isActive={true}>
                <ModalBackground onClick={this.handleModalClose}/>
                <ModalContent>
                    <Box>{this.props.list_name_encoded} - {this.props.match.params.primary_isbn13}</Box>
                </ModalContent>
                <ModalClose onClick={this.handleModalClose}/>
            </Modal>
        );
    }
}

export default BookDetail;
