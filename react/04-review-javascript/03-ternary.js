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

{length ? `Total items ${length}` : ''} {length && `Total items ${length}`}
// Preporucuje se ternarni umesto && za ispis. Jer ako je 0 ispisace se nula

const book = {translation:{english:"Eng"}, count:0}
const translation = book.translation.spanish || "NOT TRANSLATED"
translation

// COALESCE
/////////////////////////////////////////////////////////
// Will return second value if book.count was null or undefined
const count = book.count ?? "no data";

// IF ELSE
/////////////////////////////////////////////////////////
//Kada se radi javscript deo JSX ne mogu da se koriste if else jer ne vracaju rezultat. Stoga se ternarni koristi.
// moze if van JSX koda tipa early return
```
// early return
  if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
```

