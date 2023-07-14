function findAccountById(accounts,id) {
  let found = accounts.find((accounts) => accounts.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) =>
  (nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1));
return accounts
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total,book) => {
    let bookBorrows = book.borrows.filter((borrow) => borrow.id===account.id).length
    return total + bookBorrows
    },0)
}

function getBooksPossessedByAccount(account, books, authors) {
  
    let borrowed = []
    books.forEach((book) => {if(book.borrows.find((book) => book.id === account.id && !book.returned)){
    borrowed.push(book)}})
    borrowed.forEach((book) => {let person = authors.find((writer) => writer.id === book.authorId);
             book["author"]= person})
      return borrowed
    
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
