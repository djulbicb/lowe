import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';

function App() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="container">
      <Header></Header>



      {/* ako ne stavimo >0 a num Pizza je 0 je, istampace nulu. Moze ternarni */}
      {numPizzas > 0 && (
          <ul className="pizzas">
          {pizzaData.map((pizza) => (
              // <Pizza name="Pizza" indredient="Tomato, mozarella, spinach" photoName="" price={10}></Pizza>)
            // ( <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut}></Pizza>) )
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      <Footer></Footer>
    </div>
  );
}

function Header () {
  const style = {color: "red", fonteSize: "48px", textTranform:"uppercase"};

  return (
    <header className='header'>
      <h1 style={style}>Pizza Co.</h1>
    </header>
  )
}

// deconstruct props to property
function Pizza ({ pizzaObj }) {
  console.log(pizzaObj)

  // early return
  if (pizzaObj.soldOut) return null;

  return (
    // calculate class names with template literal
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer () {
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  const info = isOpen ? "We are working now." : "We are closed now."

  return (
    <footer className="footer">
      {isOpen && (
        <div className='order'>
          <p>
            We are open until midnight
          </p>
        </div>
      ) }
      {!isOpen && <p>Closed</p> }
      {/* && new Date().toLocaleTimeString() */}
    </footer>
  )
  // return React.createElement("footer", null, "We are working")
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default App;
