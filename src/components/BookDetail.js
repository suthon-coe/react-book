import React, { Component } from 'react';

class BookDetail extends Component {
  render() {
    return (
        <div>{this.props.match.params.primary_isbn13}</div>
    );
  }
}

export default BookDetail;
