import React, { useState } from "react";
import Button from "../Button/Button";
import "./carousel.css";
import Rating from "@mui/material/Rating";

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

const buttonSize = {
  width: "1.5rem",
  height: "1.5rem",
};

const Carousel = ({ product }: any) => {
  const [productItem, setProductItem] = useState(product);

  const changeColor = (color: string) => {
    setProductItem((prev: any) => ({
      ...prev,
      selected: color,
      colorDesc: `${color} Gold`,
    }));
  };

  return (
    <>
      <div>
        <img
          className="carousel_img"
          src={productItem.images[productItem.selected]}
          alt="Ring"
        />
        <div className="carousel_desc">
          <div className="carousel_name"> {productItem.name} </div>
          <div className="carousel_price">232</div>
          <div className="carousel_color_picker">
            <Button
              style={{
                ...buttonSize,
                bg_color: "#E6CA97",
              }}
              handleColor={() => changeColor("yellow")}
            />
            <Button
              style={{
                ...buttonSize,
                bg_color: "#D9D9D9",
              }}
              handleColor={() => changeColor("white")}
            />
            <Button
              style={{
                ...buttonSize,
                bg_color: "#E1A4A9",
              }}
              handleColor={() => changeColor("rose")}
            />
          </div>

          <div className="carousel_color_desc">{productItem.colorDesc} </div>
          <div className="carousel_score">
            <Rating
              defaultValue={productItem.popularityScore}
              precision={0.5}
              disabled
            />
            <p className="prd_score">{productItem.popularityScore} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
