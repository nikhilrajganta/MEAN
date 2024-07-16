# DAY-1 || 05/07/2024

- Recap on Intro to Web browers

- 2 phases of execution

  compilation[JS engine] & execution[Execution context]

- JS do JIT[Just in TIme] compilation

- Initialization and assigning

# DAY-2 || 06/07/2024

- TDZ (Temporal Dead Zone)

  The TDZ refers to the area of a block where a variable is inaccessible before it is declared and initialized.
  Here's an example to illustrate the TDZ:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

In this code snippet, when we try to access the variable x before it is declared and initialized, we get a ReferenceError. This is because x is in the TDZ until the let statement is evaluated.

- Shadowing in JavaScript

```js
let x = 5;

function example() {
  let x = 10; // lime light
  console.log(x); // Output: 10
}

example();
console.log(x); // Output: 5
```

- First Class function

`function can be passed in arguments, It should return function, assign function to a variable`

- Lexical Scope
  ![alt text](<lexical scope.png>)

- Closure
  It is both the own + lexical scope

# Array Methods

`let mango=[1,3,2,6,4]`

# 5 Pillars of Code Quality

- Readable - 75%
- Maintainability - Code Debt
- Extensibility
- Testability
- Performance

# Slice, Join - Immutable,Split, Reverse

```javascript
var data = [1, 2, 3, 4, 5];
console.log(data.reverse());
```

# Map

- It is a higher order function becauae we can pass function as argument

1. return value
2. length of i/p is true
3. transform

# Filter

1. returns copy of array
2. length of i/p is true
3. transform

# DAY-2 || 08/07/2024

- Optional Chaining ?.
- Nullish coliasion ??
- Object short hand
- Reduce

# DAY-3 || 09/07/2024

- Tasks
- at in js

# DAY-4 || 10/07/2024

- In interpolation we can have expressions, it will return
- In sattements it can't return value like `if condition`
- Predicate
- json & js object
  `js object can have functions, json can't have functions in it.  json have string datatype and js object have object tyoe. In json we can't do `.`for accessing`
- `stringify and parse` (serialization and de-serialization)
- Shallow copy create copy by reference // objects
- And deep copy create copy by value
<!-- json.stringfy(json.parse) -->
- Paradigm
- Imperative and declareative
- unary, binary and ternary

# DAY-5 || 11/07/2024

- Curring, Partial application, and point-free

```js
const CArea = (l) => (b) => (h) => l * b * h;
console.log(CArea(1)(2)(3)); // Output: 6
```

- `this` keyword
  `call, apply adn bind` to force context to `this`

# DAY-6 || 12/07/2024

- Auto- boxing
- Primitive
- making private
- OOPS in JS
- static , public and private
- over-riding in javascript

# DAY-7 || 15/07/2024

- CSS
- Flex
- Inline elememt doesn't respect height and width , only block elements respect it.
- Inline, Block and inline-block
- Overflow
- Banner in html
- Background
- Main, Section in html
- Priority of tags like color mentioning in different tags
  `elements <p> >  class >  id > inline css > using !important`
