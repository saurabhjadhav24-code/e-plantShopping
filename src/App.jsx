import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful houseplants and create
            your own little paradise.
          </p>

          <Link to="/plants">
            <button className="get-started">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />

      <Route
        path="/about"
        element={
          <div>
            <nav className="navbar">
              <div className="nav-logo">
                <Link to="/">Paradise Nursery</Link>
              </div>

              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/plants">Plants</Link>
                <Link to="/cart">🛒 Cart</Link>
              </div>
            </nav>

            <AboutUs />
          </div>
        }
      />
    </Routes>
  );
}

export default App;