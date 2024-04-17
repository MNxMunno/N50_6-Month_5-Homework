import React from "react";
import Product from "../product/Product.jsx";
import Banner from "../banner/Banner.jsx";
import photo from "../../assets/images/product-3.webp";
import photo1 from "../../assets/images/hero-1.webp";
import photo2 from "../../assets/images/hero-2.webp";
import photo3 from "../../assets/images/hero-3.webp";

const Main = () => {
  return (
    <main>
      <Product />
      <Banner url={photo} />
      <Banner url={photo1} />
      <Banner url={photo2} />
      <Banner url={photo3} />
    </main>
  );
};

export default Main;
