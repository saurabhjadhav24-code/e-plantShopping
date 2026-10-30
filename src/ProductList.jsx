import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6b?w=400" },
      { name: "Peace Lily", price: 399, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { name: "Rubber Plant", price: 449, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { name: "Boston Fern", price: 349, image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400" },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      { name: "Lavender", price: 299, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" },
      { name: "Jasmine", price: 249, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
      { name: "Rosemary", price: 199, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400" },
      { name: "Mint Plant", price: 149, image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400" },
      { name: "Lemon Balm", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { name: "Gardenia", price: 349, image: "https://images.unsplash.com/photo-1497250853187-7b6f3e7a3b3c?w=400" },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      { name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { name: "Pothos", price: 199, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { name: "Aloe Vera", price: 179, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { name: "Jade Plant", price: 249, image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400" },
      { name: "Dracaena", price: 349, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { name: "Lucky Bamboo", price: 199, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  const addedToCart = {};
  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const cartQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">Cart ({cartQuantity})</Link>
        </div>
      </nav>

      <main className="product-list">
        <h1>Our Plants</h1>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.category}>
            <h2>{category.category}</h2>

            <div className="product-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.name}>
                  <img
                    className="plant-image"
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>
                  <p className="plant-price">₹{plant.price}</p>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={Boolean(addedToCart[plant.name])}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
