import React, { useReducer } from "react";
import Product from "./Product";
import { cartReducer, initialCartState } from "./CartReducer";

const ShoppingCartApp = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const handleAdd = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: 20 }}>
      <h2>🛒 Shopping Cart</h2>

      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={handleAdd} />
      ))}

      <hr />
      <h3>Cart Summary</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity} = ₹{item.price * item.quantity}
            </p>
          ))}
          <strong>Total: ₹{total}</strong>
        </>
      )}
      <br />
      <button onClick={handleClear}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCartApp;
