function findAuthorById(authors, id) {
  let found = authors.find((authors) => id === authors.id)
  return found
}

function findBookById(books, id) {
  let findBook = books.find((books) => id === books.id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) =>book.borrows[0].returned===false)
  let notCheckedOut = books.filter((book) => book.borrows[0].returned===true)
  let merge = []
  merge.push(checkedOut)
  merge.push(notCheckedOut)
  return merge
 
}

function getBorrowersForBook(book, accounts) {
    return book.borrows
      .map((book) => {
        let account = accounts.find((account) => account.id === book.id);
        return { ...book, ...account };
      })
      .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
