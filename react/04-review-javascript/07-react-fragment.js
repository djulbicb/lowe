## React fragment
React fragment da outputuje direkt children a ne wrapper objekat
```
<>
  <p>
    Authentic Italian cuisine. 6 creative dishes to choose from. All
    from our stone oven, all organic, all delicious.
  </p>

  <ul className="pizzas">
    {pizzas.map((pizza) => (
      <Pizza pizzaObj={pizza} key={pizza.name} />
    ))}
  </ul>
</>
```