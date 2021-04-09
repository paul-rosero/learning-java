class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  } 
  get availability() {
    return this.getAvailability()
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

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, version) {
    super(title, author, ISBN, numCopies);
    this.version = version
  }
  getEdition() {
    return `The current version of this book is ${this.version}`
  }
}

/*
  WRITE YOUR SOLUTION HERE
*/
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);

const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);
console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());