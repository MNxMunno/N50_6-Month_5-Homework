import React from "react";

const Product = () => {
  const links = [
    "Mobile & Computing",
    "TV & Audio",
    "Home Appliance",
    "Samsung Live",
    "For Business",
  ];

  let link = links?.map((el, inx) => (
    <a href="#" key={inx}>
      {el}
    </a>
  ));

  ////////////////////////////////////////////
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/yN3vPvJK/product-1.webp",
      title: "Galaxy Book4 Ultra",
      price: "500",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/VLLyRPzc/product-2.webp",
      title: "Galaxy Buds2 Pro",
      price: "50 ",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/sfmq1H7H/product-3.webp",
      title: "Galaxy S24 Ultra",
      price: "750",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/Fsn6VfPj/product-4.webp",
      title: "Galaxy Tab S9 Series",
      price: "800",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/L6hC59Hh/product-5.jpg",
      title: "Galaxy Watch6 Series",
      price: "250",
    },
  ];

  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.img} alt="img" />
      <h3>{el.title}</h3>
      <h4>{el.price}$</h4>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product__content">
          <h1 className="pro_title">Shop all latest offers and innovations</h1>
          <div className="hero-links">{link}</div>
          <div className="product__cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Product;
