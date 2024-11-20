import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import "./productList.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type ProductList = Product[];

type Product = {
  images: {
    rose: string;
    white: string;
    yellow: string;
  };
  name: string;
  popularityScore: number;
  weight: number;
  selected: "yellow" | "rose" | "white";
  colorDesc: string;
};

const ProductList = () => {
  const [product, setProduct] = useState<ProductList>([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(
          data.slice(0, 4).map((prd: Product) => ({
            ...prd,
            popularityScore: (prd.popularityScore / 20).toFixed(1),
            colorDesc: "Yellow Gold",
            selected: "yellow",
          }))
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="product_list">
        <MdKeyboardArrowLeft className="move_icon" />
        <div className="carousel_list">
          {product.map((prd: Product) => (
            <Carousel product={prd} />
          ))}
        </div>
        <MdKeyboardArrowRight className="move_icon" />
      </div>
    </>
  );
};

export default ProductList;
