import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sun glasses", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo () {
  return (
    <h1>Far Away!</h1>
  )
}

function Form () {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) { return }

    const newItem = {description, quantity, packed: false, id:Date.now()}
    console.log(newItem)

    setDescription("")
    setQuantity(1)
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

function PackingList () {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item=>(<Item item={item}></Item>))}
      </ul>
    </div>
  )
}

function Item ({item}) {
  return (
    <div style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}
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