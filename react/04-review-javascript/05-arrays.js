// Map
////////////////////////////////////////////////
x = [1,2,3,4,5].map(el=>el*2)
x   // [ 2, 4, 6, 8, 10 ]

arr = [
    {name: "Bo", rating: 10}, {name: "Lowe", rating:100}
]
x = arr.map(el=>el.name)
x = arr.map(el=> {return el.name})
x   // [ 'Bo', 'Lowe' ] 

function add(input) {
    return input * 10
}
x = arr.map(el=> {return {
    test: el.name,
    rating: add(el.rating)
}})
x   // [ [ { test: 'Bo', rating: 100 }, { test: 'Lowe', rating: 1000 } ]

// Filters
////////////////////////////////////////////////
arr = [
    {name: "Bo", rating: 10, hasBook: true}, 
    {name: "Lowe", rating:100, hasBook: false},
    {name: "Jan", rating:50, hasBook: true}
]
x = arr .filter(el => el.rating > 10)
        .filter(el => el.hasBook)
        .map(el=>{return {name:el.name}})
x

// Reduce
// Iterate and boil down value to single
const startingAccomulatorValue = 0;
const totalRating = arr.reduce( (accomulator, item) => accomulator + item.rating, startingAccomulatorValue)
totalRating // 160

// Sort
// slice() creates a quick copy
x = arr.slice().sort((a,b) => a.rating - b.rating) // ascending
x = arr.slice().sort((a,b) => a.rating + b.rating) // descending
console.log(x)

// Immutable arrays
/////////////////////////////////////////////////////////
// Add item
const newItem = {name: "Bo", rating: 10, hasBook: true}
const newArr = [...arr, newItem]
newArr

// Remove item
const arrDel = arr.filter(book=>book.rating < 50)
arrDel

// Update object of map
const arrAfterUpdate = arr.map(item=>item.rating == 100 ? item : {...item, test:"add this field"})
arrAfterUpdate