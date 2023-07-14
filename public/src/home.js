function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  
    let borrowCount = books.filter((book => book.borrows.filter((check) => check.returned === false).length>0))
    return borrowCount.length
    
}

function getMostCommonGenres(books) {
  let mostCommon = books.reduce((acc,book) => {  
      const {genre} = book  
      if(acc[genre]===undefined) { 
      acc[genre] = { name: genre, count: 1 }
      } else{acc[genre].count += 1}
      return acc
  },{})
   let results = Object.values(mostCommon).sort(sortByPopularity).slice(0,5)
   return results
   }
   function sortByPopularity(item1,item2){
     return item2.count-item1.count
   }

function getMostPopularBooks(books) {
  let popularBooks = []
  const borrows = books.reduce((acc,book)=> {popularBooks.push({name:book.title,count:book.borrows.length});
},[])
  return popularBooks.sort(sortByPopularity).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let bookAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (author.id===book.authorId) {
        bookAuthors.push({ name: author.name.first + ' ' +author.name.last, count: book.borrows.length });
      }
    });
  });
   
    return bookAuthors.sort(sortByPopularity).slice(0,5)
  }   

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
