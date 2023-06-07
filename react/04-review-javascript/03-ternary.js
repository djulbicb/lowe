const page = 1300;
const output = page > 1000 ? "more than thousand" : "less than thousan"

console.log(`Book has ${output} pages.`)


// Short-Circuiting
/////////////////////////////////////////////////////////
console.log(true && "Print")
console.log(false && "Dont print")

// truthy and falsy
console.log("bo" && "Lowe")
console.log(0 && "Falsy")

const book = {translation:{english:"Eng"}, count:0}
const translation = book.translation.spanish || "NOT TRANSLATED"
translation

// COALESCE
/////////////////////////////////////////////////////////
// Will return second value if book.count was null or undefined
const count = book.count ?? "no data";