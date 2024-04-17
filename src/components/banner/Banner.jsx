import React from "react";

function Banner(props) {
  return (
    <section
      className="hero"
      style={{ background: `url(${props.url}) no-repeat center #f3f3f3` }}
    ></section>
  );
}

export default Banner;
