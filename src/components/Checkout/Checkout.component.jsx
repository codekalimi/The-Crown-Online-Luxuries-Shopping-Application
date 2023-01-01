import "./Checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CheckoutItemComponent from "./CheckoutItem.component";
import { logDOM } from "@testing-library/react";

const CheckoutComponent = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        console.log({ cartItem });
        return <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};
export default CheckoutComponent;
