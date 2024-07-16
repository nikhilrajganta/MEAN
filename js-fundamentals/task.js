// 1

const events = [
  ["Alice", "Bob", "Charlie"],
  ["Bob", "Dave", "Eve"],
  ["Charlie", "Eve", "Frank"],
];

function allAttendees(events) {
  const attendees = events.flat().sort();
  return attendees;
  // const attendees = [...new Set(events.flat().sort())];
  // return attendees;
}

console.log(allAttendees(events));

// 3
const books = [
  { title: "Book A", author: "Author 1", year: 1990 },
  { title: "Book B", author: "Author 2", year: 2010 },
  { title: "Book C", author: "Author 3", year: 2015 },
];
function getAuthorByYear(books) {
  return books
    .filter((book) => book.year > 2000)
    .map((book) => `${book.title} by ${book.author}`);
}
console.log(getAuthorByYear(books));

// 4
const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];

function stockAvailableProduct(products) {
  return products
    .filter((product) => product.stores.some((store) => store.inventory > 0))
    .map((product) => product.name);
}
console.log(stockAvailableProduct(product));
