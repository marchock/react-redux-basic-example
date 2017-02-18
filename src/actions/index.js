export function selectBook(book) {
  // selectBook is an actionCreater, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED', // always UPPERCASE
    payload: book // always an object
  }
}
