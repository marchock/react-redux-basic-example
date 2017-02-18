import React, { Component } from 'react';
// connect is the bridge between react and redux
import  { connect } from 'react-redux';

class BookDetail extends Component {
  render() {


    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// take the application state
function mapStatToProps(state) { // this is the glue between react and react-redux
  // whatever is returned will show up as props inside of BookList

  return {
    book: state.activeBook
  };
}

export default connect(mapStatToProps)(BookDetail);
