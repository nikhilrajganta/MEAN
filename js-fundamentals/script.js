// function sayHellos() {
//   return function () {
//     console.log("Hello");
//   };
// }
// var temp = sayHellos();
// temp();

// console.log(sayHellos());

// sayHellos()();

// // 2
// let codeWord = "Hulk";

// function spaceShip() {
//   let question = "Please provide the code word";

//   function codeWordCheck() {
//     let password = "Hulk";
//     console.log(question);
//     if (password === codeWord) {
//       console.log("Welcome," + password + " the strongest avenger");
//     } else {
//       console.log("Access denied");
//     }
//   }
//   codeWordCheck();
// }
// spaceShip();

// // 3
// var data = [1, 2, 3, 4, 5];
// console.log(data.reverse());

// // 4 //map

// console.log(data.map((x) => x * 2));

// // data.forEach((element) => {
// //   element * 2;
// // });

// for (i = 0; i < data.length; i++) {
//   var value = data[i] * 2;
//   console.log(value + "");
// }

// function doubleArrayValues(array) {
//   temp = [];
//   for (let value of arr) {
//     temp.push(value * 2);
//   }
//   return temp;
// }

// let arr = [2, 4, 6, 8, 3];

// console.log(doubleArrayValues(arr));

// console.log(arr.map((arr) => arr * 2)); // Single line

// function ownMap(fn, ar) {
//   //code
//   //   console.log(fn, ar);
//   //   console.log(ar);
//   //   console.log(fn);
//   temp = [];
//   for (let value of ar) {
//     temp.push(fn(value));
//   }
//   //   console.log(temp);
//   return temp;
// }

// console.log(ownMap((chiku) => chiku * 2, [2, 4, 6, 8]));

// function ownMapI(fn, ar) {
//   //   console.log(ar);
//   //   console.log(fn);
//   temp = [];
//   for (let value in ar) {
//     // temp.push(fn(value));
//     temp.push(fn(ar[value], +value));
//     ``;
//   }
//   //   for (let i = 0; i < ar.length; i++) {
//   //     // temp.push(fn(value));
//   //     temp.push(fn(ar[i], i));
//   //   }
//   return temp;
// }
// let v = [5, 6, 9, 10].map((x, i) => x * 2 + i);

// console.log(ownMapI((x, index) => x * 2 + index, [5, 6, 9, 10]));

// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//   "Thor",
// ];

// console.log(avengers.map((character) => character.length));

// console.log(avengers.filter((character) => character.length >= 10));

// // 5 // filter
// const marks = [90, 40, 25, 85, 10, 0, 99];
// const passedMarks = marks.filter((mark) => mark >= 40);
// console.log(passedMarks, marks);
// // [90, 40,  85, 99]

// console.log(avengers.filter((character) => character.length > 10));

// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];

// console.log(books.filter((book) => book.rating > 4.7));

// console.log(books.filter((book) => book.rating > 4.7).map((t) => t.title));
// // Rating 4.7 or more

// // Output
// // ['A Brief History of Time', 'Clean Code', 'Sapiens']

// // 8-7-24
// // Tasks
// const transactions = [
//   { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
//   { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
//   { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
//   // more transactions...
// ];

// console.log(
//   transactions
//     .filter(
//       ({ category, amount, date }) =>
//         category == "Business" && amount > 5000 && date.slice(0, 4) === "2023"
//     )
//     .map(({ id, amount, date }) => `Transaction ${id}: $${amount} on ${date}`)
// );

// // const result = departments.map((d) => {
// //   d.employees;
// // });

// // console.log(result);

// // Top 3 Students
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 88 },
//   { name: "David", score: 79 },
//   { name: "Eva", score: 95 },
// ];

// const top3Students = students
//   .sort((a, b) => b.score - a.score)
//   .slice(0, 3)
//   .map((stu) => stu.name);

// console.log(top3Students.join(", "));

// // This should output: "Eva, Bob, Charlie"

// // Grade is 80 or more - promote

// const employees = [
//   { id: 1, name: "Alice", grade: 78 },
//   { id: 2, name: "Bob", grade: 85 },
//   { id: 3, name: "Charlie", grade: 92 },
//   { id: 4, name: "David", grade: 88 },
//   { id: 5, name: "Eva", grade: 76 },
// ];

// // output

// // [
// //   { id: 2, name: "Bob", grade: 85, status: 'promoted' },
// //   { id: 3, name: "Charlie", grade: 92,  status: 'promoted'  },
// //   { id: 4, name: "David", grade: 88,  status: 'promoted'  },
// // ]

// const EmpAbove80 = employees
//   .filter((employee) => employee.grade >= 80)
//   .map((employee) => ({
//     ...employee,
//     status: "promoted",
//   }));

// console.log(EmpAbove80);

// // Eva (promoted), Bob(promoted), Charlie(promoted)

// // const EmpAbove80 = employees
// //   .filter((employee) => employee.grade >= 80)
// //   .map((employee) => employee.name);

// // console.log(EmpAbove80);

// // Que
// const players = [
//   { name: "Alice", skills: ["defense", "speed"] },
//   { name: "Bob", skills: ["speed", "attack", "strategy"] },
//   { name: "Charlie", skills: ["speed", "attack"] },
//   { name: "David", skills: ["strategy", "defense", "speed"] },
//   { name: "Eva", skills: ["speed", "strategy"] },
// ];

// const requiredSkills = ["speed", "strategy"];

// // Output 'David, Eva'

// console.log(
//   players
//     .filter((p) => requiredSkills.every((skill) => p.skills.includes(skill)))
//     .map((p) => p.name)
// );

// //
// const person1 = {
//   name: {
//     first: "Alice",
//     last: "Johnson",
//   },
//   age: 28,
//   favoriteColors: ["blue", "green"],
//   place: {
//     city: "Chennai",
//   },
// };
// // Defense code
// if (person1.place && person1.place.city) {
//   console.log("Unna ayya");
// } else {
//   console.log("Not Found");
// }

// // Ex1

// const person = {
//   name: {
//     first: "Alice",
//     last: "Johnson",
//   },
//   age: 28,
//   favoriteColors: ["blue", "green"],
// };

// // function getPersonInfo({
// //   name: { first: firstName, last: lastName },
// //   age: personAge,
// //   favoriteColors: [primaryColor, secondaryColor],
// // }) {
// //   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor[1]}.`;
// // }

// const getPersonInfo = ({
//   name: { first: firstName, last: lastName },
//   age: personAge,
//   favoriteColors: [primaryColor, secondaryColor],
// }) => {
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor[1]}.`;
// };

// console.log(getPersonInfo(person));

// // Ex2:
// const createBook = (title, author, year) => ({
//   title,
//   author,
//   year,
//   getSummary() {
//     return `${title} by ${author}, published in ${year}.`;
//   },
// });

// const book = createBook("1984", "George Orwell", 1949);
// console.log(book.getSummary(), book);

// // Ex 3

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     profile: {
//       age: 25,
//       address: {
//         city: "Wonderland",
//         zip: "12345",
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Bob",
//   },
// ];

// // function displayUserProfile(userId) {
// //   const user = users.find((u) => u.id === userId);
// //   console.log(`User ${user} is ${age} years old and lives in ${city}.`);
// // }

// function displayUserProfile(userId) {
//   const user = users.find((u) => u.id === userId);

//   const age = user?.profile?.age ?? "fake";
//   const city = user?.profile?.address?.city ?? "fake";

//   console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
// }

// displayUserProfile(1);
// displayUserProfile(2);

// // Ex 4
// const library = [
//   {
//     title: "The Great Gatsby",
//     authors: ["F. Scott Fitzgerald"],
//     borrowed: true,
//   },
//   { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
//   { title: "1984", authors: ["George Orwell"], borrowed: true },
//   { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
//   { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
// ];

// // Task 4.1: Determine if all books in the library have been borrowed.
// // Output;
// // ("Yes, all books are borrowed");
// const b = library.every((book) => book.borrowed);
// console.log(b ? "borrowed" : "Not borrowed");

// // Task 4.2: Determine if there are books in the library written by multiple authors
// const a = library.every((book) => book.authors.length > 1);
// console.log(a ? "yes" : "no");

// // Output;
// // ("No, there are no multiple authors");

// const sum = [1, 7, 3, 10, 5].reduce((acc, curr) => {
//   // if (acc > curr) {
//   //   return acc;
//   // } else {
//   //   return curr;
//   // }
//   return acc > curr ? acc : curr;
// });
// console.log(sum);

// // Tasks
// // 1
// const transactionsData = [
//   { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
//   { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
//   { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
//   // more transactions...
// ];

// console.log(
//   transactions
//     .filter(
//       ({ category, amount, date }) =>
//         category == "Business" && amount > 5000 && date.slice(0, 4) === "2023"
//     )
//     .map(({ id, amount, date }) => `Transaction ${id} : ${amount} on ${date}`)
// );

// // 2
// const departments = [
//   { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
//   { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
// ];
// // [{ "Engineering": 170000 }, { "Marketing": 125000 }]

// console.log(
//   departments.map(({ name, employees }) => {
//     const totalSalary = employees.reduce((acc, { salary }) => acc + salary, 0);
//     return { [name]: totalSalary };
//   })
// );
// // 3
// const weatherData = [
//   { date: "2023-03-01", temperature: 16 },
//   { date: "2023-03-02", temperature: 20 },
//   { date: "2023-03-03", temperature: 18 },
// ];
// // { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }
// const result = weatherData.reduce((acc, { date, temperature }) => {
//   acc[date] = temperature;
//   return acc;
// }, {});

// console.log(result);

// // 4
// // From an array of products, find products in the 'Electronics' category with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
// // these products.

// const products = [
//   { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
//   { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
//   { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
// ];
// // 199.99 // Assuming only one product meets the criteria

// const fil = products.filter(
//   (p) => p.category === "Electronics" && p.reviews > 50 && p.rating > 4
// );

// const calSum =
//   fil.reduce((sum, product) => sum + product.price, 0) / fil.length;

// console.log(calSum);

// // 5
// const usersData = [
//   { userId: "U1", name: "Alice" },
//   { userId: "U2", name: "Bob" },
//   // more users...
// ];
// const orders = [
//   { userId: "U1", orderDetails: "Order 1 Details" },
//   { userId: "U2", orderDetails: "Order 2 Details" },
//   // more orders...
// ];
// // Expected Output:
// // [
// // { name: 'Alice', orderDetails: 'Order 1 Details' },
// // { name: 'Bob', orderDetails: 'Order 2 Details' }
// // ]
// console.log(
//   users.map((user) => {
//     const order = orders.find((order) => order.userId === user.userId);
//     return {
//       name: user.name,
//       orderDetails: user.orderDetails,
//     };
//   })
// );

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.at(0));

// // tasks 9-7-24
// const userData = {
//   user: {
//     profile: {
//       name: "Alice",
//       age: null,
//     },
//   },
// };

// function getUserAge(userData) {
//   const checkAge = userData?.user?.profile?.age ?? "Age not provided";
//   return checkAge;
// }

// console.log(getUserAge(userData)); // Should print: Age not provided
// console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
// console.log(getUserAge({ user: {} })); // Should print: Age not provided

//
//
//
//
//
//
//
//
// // 2
// const employeesData = [
//   {
//     id: 1,
//     name: "Alice",
//     position: "Developer",
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     position: "Manager",
//     skills: ["Leadership", "Communication"],
//   },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
// ];

// // Should print:
// // [
// //   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
// //   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
// //   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// // ]

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 700 },
// ];

// function getTotalPrice(products) {
//   return products.reduce((acc, products) => acc + products.price, 0);
// }

// console.log(getTotalPrice(products)); // Should print: 2200

// // 4
// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark theme",
//   },
// };

// function getUserSettings(userProfile) {
//   // const con = userProfile?.settings?.theme
//   //   ? userProfile.settings.theme
//   //   : "Light theme";
//   return `${userProfile.name ?? "user"} prefers the ${
//     userProfile?.settings?.theme ?? "light"
//   }`;
//   // return `${userProfile.name} prefers the ${con}`;
// }

// console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
// console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// // 5
// const user1 = { name: "Jane", active: true };
// const user2 = { name: "John", active: false };

// function getUserStatus(u) {
//   return `${u.name} is currently ${u.active ? "active" : "inactive"}`;
// }

// console.log(getUserStatus(user1)); // Should print: Jane is currently active
// console.log(getUserStatus(user2)); // Should print: John is currently inactive

// // 6
// const userWithFullProfile = {
//   id: 1,
//   name: "Alice",
//   profile: {
//     age: 25,
//     address: {
//       city: "Wonderland",
//       zip: "12345",
//     },
//   },
// };

// const userWithPartialProfile = {
//   id: 2,
//   name: "Bob",
//   profile: {
//     age: null,
//   },
// };

// function getUserAge(p) {
//   return `${p?.profile?.age ?? "Age not provided"}`;
// }

// console.log(getUserAge(userWithFullProfile)); // Should print: 25
// console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
// console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

// // 7
// const scores = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 85 },
//   { name: "Charlie", score: 92 },
// ];

// function getTopScorer(s) {
//   const r = s.reduce((a, b) => (a.score > b.score ? a : b));
//   return `${r.name} is the top scorer with a score of ${r.score}`;
// }

// console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

// // 8
// // Ex26 - Create a function that returns a greeting message based on the time of day
// function greet(name) {
//   const hour = new Date().getHours();
//   const timeOfDay = hour < 10 ? "morning" : hour < 18 ? "afternoon" : "evening";
//   // const timeday = hour < 10 ? "m" : hour > 10 && hour < 18 ? "a" : "e";
//   return `Good ${timeOfDay}, ${name}!`;
// }

// console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)

// // 9
// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// function getFirstFriendName(userId) {
//   const user = users.find((u) => u.id === userId);
//   if (!user) {
//     return "user not found";
//   }
//   if (user.friends.length === 0) {
//     return `${user.name} has no friends`;
//   }
//   const {
//     friends: [{ name }],
//   } = user;
//   return name;
// }

// console.log(getFirstFriendName(1)); // Should print: Bob
// console.log(getFirstFriendName(2)); // Should print: Eve
// console.log(getFirstFriendName(3)); // Should print: User not found
// console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// // 11
// function getAverageRatingAfterYear(year) {
//   const moviesAfterYear = movies.filter((movie) => movie.year > year);
//   if (moviesAfterYear.length === 0) {
//     return `No movies after the specified year`;
//   }

//   const totalRatings = moviesAfterYear.reduce(
//     (acc, movie) =>
//       acc + movie.ratings.reduce((acc, rating) => acc + rating, 0),
//     0
//   );
//   const averageRating =
//     totalRatings / (moviesAfterYear.length * moviesAfterYear[0].ratings.length);

//   return `Average rating after ${year} is ${averageRating}`;
// }

// console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
// console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// // console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
// // console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

// // 16
// function getTitlesSortedByAverageRating() {
//   return movies
//     .map((movie) => ({
//       title: movie.title,
//       averageRating:
//         movie.ratings.reduce((sum, rating) => sum + rating, 0) /
//         movie.ratings.length,
//     }))
//     .sort((a, b) => b.averageRating - a.averageRating)
//     .map((movie) => movie.title);
// }

// console.log(
//   movies.map((m) => ({
//     av: m.ratings.reduce((a, b) => a + b, 0) / m.ratings.length,
//   }))
// );

// console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

// // 33
// const getTotalRatingsForDirectors = () => {
//   return movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
// };
// console.log(getTotalRatingsForDirectors());
// // Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

// 21
function getTotalRatingsByGenre(genre) {
  return movies.reduce((total, movie) => {
    if (movie.genre === genre) {
      return total + movie.ratings.length;
    }
    return total;
  }, 0);
}

console.log(getTotalRatingsByGenre("Action")); // Output: 9
console.log(getTotalRatingsByGenre("Drama")); // Output: 3

// 22
function getMoviesWithHighAverageRating() {
  return movies.map((movie) => {
    const averageRating =
      movie.ratings.reduce((sum, rating) => sum + rating, 0) /
      movie.ratings.length;
    return `${movie.title} has an average rating of ${averageRating.toFixed(
      2
    )}`;
  });
}
console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an average rating of 8.67"]

// 23
function getTitlesByDirectorSortedByYear(director) {
  return movies
    .filter((movie) => movie.director === director)
    .sort((a, b) => a.year - b.year)
    .map((movie) => movie.title);
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Output: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Output: ["Mahanati"]
// console.log(getAverageRatingByYear(2018)); // Should print: 9.00
// console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the specified year"
// 24
function getAverageRatingByYear(year) {
  const moviesByYear = movies.filter((movie) => movie.year === year);
  if (moviesByYear.length === 0) {
    return "No movies released in the specified year";
  }
  const totalRatings = moviesByYear.reduce((total, movie) => {
    return total + movie.ratings.reduce((sum, rating) => sum + rating, 0);
  }, 0);
  return (
    totalRatings /
    moviesByYear.reduce((total, movie) => total + movie.ratings.length, 0)
  ).toFixed(2);
}
const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];
// 27
function mergeMovies(movies1, movies2) {
  return [...movies1, ...movies2];
}
console.log(mergeMovies(movies, moreMovies));

// 28
function getTitles(...movieArgs) {
  return movieArgs.map((movie) => movie.title);
}
console.log(getTitles(...movies)); // Output: ["Baahubali", "Arjun Reddy", "Mahanati", "Eega", "Jersey"]
console.log(getTitles(movies[0], movies[1])); // Output: ["Baahubali", "Arjun Reddy"]

// 29
function mergeMovies(movies1, movies2 = []) {
  return [...movies1, ...movies2];
}

console.log(mergeMovies(movies, moreMovies)); // Output: array with all 7 movies
console.log(mergeMovies(movies)); // Output: array with original 5 movies

// 30
function getLastNMovieTitles(n = 3) {
  //
}

console.log(getLastNMovieTitles()); // Output: ["Eega", "Jersey"]
console.log(getLastNMovieTitles(2)); // Output: ["Jersey"]

// // 10
// function getMovieDetails(id) {
//   const movie = movies.find((movie) => movie.id === id);
//   if (!movie) {
//     return "No Movie Found";
//   }
//   return `${movie.title} is a ${movie.genre} movie`;
// }

// console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
// console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
// console.log(getMovieDetails(6)); // Should print: Movie not found

// // console.log(getAverageRatingByYear(2018)); // Should print: 9.00
// // console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the specified year"

// const nums = [10, 20, 30, 40, 60, 10];

// console.log(
//   nums.reduce((a, b) => {
//     return a > b ? a : b;
//   })
// );

// function getAverageRatingByYear(mid) {
//   const movie = movies.find((id) => id.year === mid);
//   const nik = { ...movies };
//   console.log(nik);
// }

// // const addSkill = (employeesData, skill) => {
// //   employeesData.map((i) => i.skills.splice(2, 0, skill));
// // };
// // console.log(addSkill(employeesData, "Problem Solving"));
// // console.log(employeesData);

// const stu = {
//   first: "n",
//   last: "r",
//   fullname: () => {
//     return `${this.first} , ${this.last}`;
//   },
// };

// window.first = "nik";

// console.log(stu.fullname());

// const fullname2 = () => {
//   return `${this.last}, ${this.first}`;
// };

// const st5 = {
//   first: "g",
//   last: "g",
// };

// console.log(fullname2.call(st5));
// console.log(fullname2.apply(st5));

const luffy = {
  name: "Monkey D. Luffy",
  crew: "Straw Hat Pirates",
  actions: {
    gearSecond: function () {
      console.log(`${this.name} activates Gear Second!`);
      const attack = () => {
        console.log(`${this.name} attacks with Gomu Gomu no Jet Pistol!`);
      };
      attack();
    },
    gearFourth: function () {
      console.log(`${this.name} activates Gear Fourth!`);
      const attack = () => {
        console.log(`${this.name} attacks with Gomu Gomu no Kong Gun!`);
      };
      attack();
    },
    crewShout: () => {
      console.log(`Crew Shout: ${this.crew} cannot be accessed here.`);
    },
  },
};

luffy.actions.gearSecond.call(luffy);
luffy.actions.gearFourth.call(luffy);
luffy.actions.crewShout.call(luffy);
