Method Mutability
push() Mutable
pop() Mutable
shift() Mutable
unshift() Mutable
splice() Mutable
reverse() Mutable
sort() Mutable
Object.assign() Mutable
Array.prototype.concat() Immutable
Array.prototype.slice() Immutable
Array.prototype.map() Immutable
Array.prototype.filter() Immutable
Array.prototype.reduce() Immutable
Array.prototype.every() Immutable
Array.prototype.some() Immutable
Array.prototype.find() Immutable
Array.prototype.findIndex() Immutable
JSON.parse() Immutable
JSON.stringify() Immutable
Object.freeze() Immutable
Object.seal() Partially Mutable
Object.defineProperty() Mutable
Explanation
Mutable Methods: These methods directly modify the original array or object, such as push(), pop(), shift(), unshift(), splice(), reverse(), and sort(). They change the state of the original data structure.
Immutable Methods: These methods create a new array or object without modifying the original, such as concat(), slice(), map(), filter(), reduce(), every(), some(), find(), and findIndex(). They return a new data structure, leaving the original unchanged.
