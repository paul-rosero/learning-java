/*
  WRITE YOUR SOLUTION HERE
*/
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  } 
  get availability() {
    return this.getAvailability 
  }

  getAvailability() {
    if (this.numCopies == 0) {
      return "Out of stock";
    } else if ( this.numCopies > 0 && this.numCopies < 10) {
      return "Low stock";
    } else {
      return "In stock";
    }
  }

  sell(numSold = 1) {
    this.numCopies -= numSold
  }

  restock(restockCopies = 5) {
    this.numCopies += restockCopies
  }

}