import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const classItem = inCart ? "in-cart" : "";
  const cartButton = inCart ? "Remove From Cart" : "Add to Cart";

  function addToCart() {
    setInCart(!inCart);
  }

  return (
    <li className={classItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        {cartButton}
      </button>
    </li>
  );
}

export default Item;