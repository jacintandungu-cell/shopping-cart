import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: "Apples 🍎", category: "Fruits" },
    { id: 2, name: "Carrots 🥕", category: "Vegetables" },
    { id: 3, name: "Milk 🥛", category: "Dairy" },
    { id: 4, name: "Bread 🍞", category: "Bakery" }
  ];

  const addToCart = (item) => setCart([...cart, item]);

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header>
        <h1>✨ Dynamic Shopping App ✨</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>
      </header>

      <section>
        <label>Filter by category: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All 🛍️</option>
          <option value="Fruits">Fruits 🍎</option>
          <option value="Vegetables">Vegetables 🥕</option>
          <option value="Dairy">Dairy 🥛</option>
          <option value="Bakery">Bakery 🍞</option>
        </select>
      </section>

      <h2>Shopping List</h2>
      <div className="list">
        {filteredItems.map((item) => (
          <div key={item.id} className="item">
            {item.name}
            <button onClick={() => addToCart(item)}>Add to Cart ➕</button>
          </div>
        ))}
      </div>

      <h2>Cart 🛒 ({cart.length})</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#888" }}>
            Your cart is empty — add something cute! 💖
          </p>
        ) : (
          cart.map((item, index) => <div key={index}>{item.name}</div>)
        )}
      </div>

      <footer style={{ marginTop: "30px", textAlign: "center", fontStyle: "italic" }}>
        <p>✨ Thanks for shopping with us ✨</p>
      </footer>
    </div>
  );
}

export default App;
