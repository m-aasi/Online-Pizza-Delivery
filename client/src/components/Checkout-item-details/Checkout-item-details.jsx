import { useCart } from "../../contexts/cart.context";
import CheckoutItem from "../Checkout-item/Checkout-item";
import PaymentForm from "../payment-form/payment-form";
import styles from "./Checkout-item-details.module.css";

export default function CheckoutItemDetails() {
  const { cartItems } = useCart();
  return (
    <div className={styles["checkout-item-details-container"]}>
      <header className={styles["checkout-item-details-header"]}>
        <span>Product</span>
        <span>Description</span>
        <span>Size</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      <div className={styles["checkout-item-container"]}>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles["total"]}>total $0</div>
      <PaymentForm />
    </div>
  );
}
