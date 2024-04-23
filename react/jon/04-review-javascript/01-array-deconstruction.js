// Array deconstruction
/////////////////////////////////////////

arr = [
    {
        id: 1,
        name: "Bo",
        tag: ["tag1", "tag2"]
    },
    {
        id: 2,
        name: "Lowe",
        tag: ["tag3", "tag4", "tag5", "tag6", "tag7"]
    }
]

function find(_id) {
    return arr.find(el => el.id == _id)
}
find(1)

const [bo, lowe] = arr;
bo
lowe

const {id, name, tag} = lowe;

// Rest operator
/////////////////////////////////////////////////////////
// Deconstruct array

const [primaryTag, secondaryTag, ...otherTags] = lowe.tag
// tag3 tag4 [ 'tag5', 'tag6', 'tag7' ] 
console.log(primaryTag, secondaryTag, otherTags) 
7

// Spread operator
/////////////////////////////////////////////////////////
// Similar to rest. For adding new elements with old array
arr = ["item1", "item2"]
arr1 = [...arr, "item3", "item4"]
arr1 // [ 'item1', 'item2', 'item3', 'item4' ]

// Spread object
// If original object has property with the same name it will override it, so put it first
obj = {
    name: "Name"
}
objExt = {obj, "test":"Test"} // { obj: { name: 'Name' }, test: 'Test' }
objExt = {...obj, "test": "Test"}
console.log(objExt) // { name: 'Name', test: 'Test' }