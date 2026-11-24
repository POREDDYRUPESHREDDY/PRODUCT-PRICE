
import React, { useState } from "react";
import "./App.css";

// Child Component using Props
function Product(props) {
  return (
    <div>
      <h2>Product: {props.name}</h2>
      <h3>Price: ₹{props.price}</h3>
    </div>
  );
}

// Parent Component using State
function App() {
  const [price, setPrice] = useState(1000);

  return (
    <div>
      <h1>Product Price Management</h1>

      <Product name="Laptop" price={price} />

      <button onClick={() => setPrice(price + 500)}>
        Increase Price
      </button>

      <button onClick={() => setPrice(price - 500)}>
        Decrease Price
      </button>
    </div>
  );
}

export default App;
