import "../styles/ProductCard.css";
import Img from "./Img";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: string;
}

const ProductCard = ({ imgSrc, title, price }: ProductCardProps) => {
  return (
    <>
      <div className="product-card">
        <div className="product-card-border-wrapper">
          <div className="product-card-border double"></div>
        </div>
        <div className="product-card-content">
          <div className="product-card-img-wrapper">
            <Img imgSrc={imgSrc} />
          </div>
          <div>
            <div>ProductCard {title}</div>
            <div>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
