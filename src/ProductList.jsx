import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691143-643e2d7e2d3c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 32,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 7,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Haworthia",
    price: 22,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 24,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1597055181300-4a1e6f6e4f99?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "String of Pearls",
    price: 27,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 21,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Burro's Tail",
    price: 26,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 13,
    name: "African Violet",
    price: 29,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Anthurium",
    price: 36,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Begonia",
    price: 31,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Geranium",
    price: 33,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Kalanchoe",
    price: 23,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>

      <div className="product-page">
        <h1>Our Houseplants</h1>

        <p className="product-intro">
          Discover beautiful plants to make your home greener and healthier.
        </p>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="product-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-image"
                      />

                      <h3>{plant.name}</h3>

                      <p className="price">${plant.price}</p>

                      <button
                        className="add-button"
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;