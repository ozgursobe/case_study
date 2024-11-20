import React from "react";
import "./carousel.css";

type Product = {
  images: {
    rose: string;
    white: string;
    yellow: string;
  };
  name: string;
  popularityScore: number;
  weight: number;
};

const Carousel = ({ product }: any) => {
  return (
    <>
      <div>
        <img className="carousel_img" src={product.images.yellow} alt="Ring" />
        <div className="carousel_desc">
          <div className="carousel_name"> {product.name} </div>
          <div className="carousel_price">232</div>
          <div>Colour Desc</div>
          <div className="carousel_color_desc">Colour Desc</div>
          <div className="carousel_score">{product.popularityScore} </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
