import "./ProductCard.style.scss";
import ButtonComponent from "../Button/Button.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const ProductCardComponent = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addToCart}>
        Add to cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCardComponent;
