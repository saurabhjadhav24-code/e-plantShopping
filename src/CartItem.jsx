import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
removeItem,
updateQuantity,
} from "./CartSlice";
import "./App.css";

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector(
(state) => state.cart?.items ?? []
);

const totalCost = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const handleQuantityChange = (name, quantity) => {
dispatch(updateQuantity({ name, quantity }));
};

const handleRemove = (name) => {
dispatch(removeItem(name));
};

return ( <div className="cart-page"> <nav className="navbar"> <Link className="nav-logo" to="/">
Paradise Nursery </Link>

```
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart">
        Cart (
        {cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )}
        )
      </Link>
    </div>
  </nav>

  <main className="cart-container">
    <h1>Shopping Cart</h1>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
        <p>Discover beautiful plants for your home.</p>
        <Link to="/plants" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h2>{item.name}</h2>

                <p>Unit Price: ₹{item.price}</p>

                <p>
                  Item Total: ₹
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() =>
                      handleQuantityChange(
                        item.name,
                        item.quantity - 1
                      )
                    }
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      handleQuantityChange(
                        item.name,
                        item.quantity + 1
                      )
                    }
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-item"
                  onClick={() => handleRemove(item.name)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total: ₹{totalCost.toFixed(2)}</h2>

          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>

          <button
            type="button"
            className="checkout-button"
            onClick={() =>
              window.alert("Thank you for shopping with Paradise Nursery!")
            }
          >
            Checkout
          </button>
        </div>
      </>
    )}
  </main>
</div>
```

);
}

export default CartItem;
