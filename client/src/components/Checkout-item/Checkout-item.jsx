import { useState } from "react";
import styles from "./Checkout-item.module.css";
import { useCart } from "../../contexts/cart.context";
export default function CheckoutItem({ item }) {
  const { clearItemFromCart } = useCart();
  const { productId, title, image, quantity, priceName, priceValue } = item;
  // Create a state to hold the selected size
  const [selectedSize, setSelectedSize] = useState(priceName[0]); // Set initial size as the default

  // Function to handle size change
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Lookup priceValue based on selectedSize
  const selectedPriceValue = priceValue[priceName.indexOf(selectedSize)];
  return (
    <div className={styles["checkout-item-container"]}>
      <span className={styles["item-image"]}>
        <img src={image} alt="" width="50px" height="50px" />
      </span>
      <span className={styles["name"]}>{title}</span>
      <span>
        <select
          className={styles["size"]}
          value={selectedSize}
          onChange={handleSizeChange}
        >
          {priceName.map((size) => {
            return <option key={size.index}>{size}</option>;
          })}
        </select>
      </span>

      <span className={styles["quantity"]}>
        <button className={styles["arrow"]}>&lt;</button>
        {quantity}
        <button className={styles["arrow"]}>&gt;</button>
      </span>
      <span className={styles["price"]}>{quantity * selectedPriceValue}</span>
      <span className={styles["remove-button"]}>
        <button onClick={() => clearItemFromCart(item)}>x</button>
      </span>
    </div>
  );
}

/*
 <span className={styles["image-container"]}>
        {/* <img
          src="./../../assets/Cup & peporoni.jpeg"
          alt="Pizza"
          className={styles["img"]}
        /> }
        
        </span>


*/
