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
};

const ProductList = () => {
  const [product, setProduct] = useState<ProductList>([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.slice(0, 4));
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
