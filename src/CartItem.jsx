import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
            🛒 Cart <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to your cart.</p>

            <Link to="/plants">
              <button className="continue-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />

                    <div className="cart-details">
                      <h2>{item.name}</h2>

                      <p>Unit Price: ${item.price}</p>

                      <p>Total: ${itemTotal}</p>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>

              <p>
                Total Items: <strong>{totalItems}</strong>
              </p>

              <p className="grand-total">
                Total Amount: ${totalAmount}
              </p>

              <button
                className="checkout-button"
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>

              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;