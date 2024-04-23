import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sun glasses", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  const handleSaveItem = (item) => {
    setItems(_items=>[..._items, item]);
  }

  const handleDeleteItem = (_item) => {
    setItems(_items=>_items.filter(item=>item.id !== _item.id))
  }

  const handleToggleItem = (_item) => {
    console.log(_item)
    setItems(_items => items.map(it => it.id === _item.id ? {...it, packed: !_item.packed} : it))
  }

  const handleClearList = () => {
    setItems([])
  }


  return (
    <div className="App">
      <Logo />
      <Form onSaveItem={handleSaveItem}/>
      <PackingList itemsList={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats />
    </div>
  );
}

function Logo () {
  return (
    <h1>Far Away!</h1>
  )
}

function Form ({onSaveItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) { return }

    const newItem = {description, quantity, packed: false, id:Date.now()}
    console.log(newItem)

    setDescription("")
    setQuantity(1)

    onSaveItem(newItem)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
       <h3>What do you need for your 😍 trip?</h3>
       <select value={quantity} onChange={(e=>{setQuantity(e.target.value)})}>
        {
          Array.from({length: 20}, (_, i)=> i+1).map(
            (num => (
              <option value={num} key={num}>{num}</option>
            ))
          )
        }
       </select>
       <input type="text" value={description} onChange={(e=>setDescription(e.target.value))} placeholder="Item..."></input>
       <button>Add</button>
    </form>
  )
}

function PackingList ({itemsList, onDeleteItem, onToggleItem, onClearList}) {
  const [sortBy, setSortBy] = useState("input");

  const handleSort = (e) => {
    console.log(e.target.value)
    setSortBy((val)=>e.target.value)
  }

  let sortedItems;
  if (sortBy === "input") {
      sortedItems = itemsList;
  }

  if (sortBy === "description") {
    sortedItems = itemsList.slice().sort((a,b) => a.description.localeCompare(b.description))
  }

  if (sortBy === "packed") {
    // boolean has to convert to number
    sortedItems = itemsList.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  }

  console.log(sortedItems)

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map(item=>(<Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}></Item>))}
        </ul>
      </div>

      <div onChange={handleSort} className='actions'>
        <select>
          <option value="input">
            Sort by input order
          </option>
          <option value="description">
            Sort by description
          </option>
          <option value="packed">
            Sort by packed status
          </option>
        </select>

        <button onClick={onClearList}>Clear</button>
      </div>
    </>
  )
}

function Item ({item, onDeleteItem, onToggleItem}) {
  return (
    <div onClick={()=>onToggleItem(item)} style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}
      <button onClick={()=>onDeleteItem(item)}>❌</button>
    </div>
  )
}

function Stats () {
  return (
    <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </p>
  );
}