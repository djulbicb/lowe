// Chaining optionals
////////////////////////////////////////////////////////////////
// Add ? to mark it as optional
// book2.bookletPages?.count ?? 0 - coalesce
const book1 = {pages: {count: 100}, bookletPages: {count: 100}}
const book2 = {pages: {count: 100}}

const total1 = book1.pages?.count + book1.bookletPages?.count
const total2 = book2.pages?.count + (book2.bookletPages?.count ?? 0)

console.log(total1, total2)