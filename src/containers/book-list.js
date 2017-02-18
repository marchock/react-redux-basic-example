import React, { Component } from 'react';

// connect is the bridge between react and redux
import  { connect } from 'react-redux';

//  will provide you with the dispatch function so you can call it directly
import  { bindActionCreators } from 'redux';

// Actions
import { selectBook } from '../actions/index';

class BookList extends Component {


  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


// take the application state
function mapStatToProps(state) { // this is the glue between react and react-redux
  // whatever is returned will show up as props inside of BookList

  return {
    books: state.books
  };
}

// Anthing returned form this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// promote booklist form a component to a container - it needs to know about this new dispatch method selectbook. Make it available as a prop.

// connct the container to the view
export default connect(mapStatToProps, mapDispatchToProps)(BookList);
