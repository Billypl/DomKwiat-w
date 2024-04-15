import "../styles/Products.css";
import ProductCard from "../components/ProductCard";
import TitleUnderlined from "../components/TitleUnderlined";

const Products = () => {
  return (
    <>
      <TitleUnderlined priority="1"> Produkty</TitleUnderlined>
      <section id="products">
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
        <ProductCard
          imgSrc="/assets/bukiet.jpg"
          title="Róże"
          price="69.00 zł"
        />
      </section>
    </>
  );
};

export default Products;
