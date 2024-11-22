import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import "./productList.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type ProductListType = Product[];

export type Product = {
  images: {
    rose: string;
    white: string;
    yellow: string;
  };
  name: string;
  popularityScore: number;
  weight: number;
  price: string;
  selected: "yellow" | "rose" | "white";
  colorDesc: string;
};

const baseURL = "https://kutez-backend.vercel.app/";

const ProductList = () => {
  const [product, setProduct] = useState<ProductListType>([]);
  const [initial, setInitial] = useState<number>(0);
  const productSize = 4;
  const handlePrev = () => {
    setInitial((prevIndex) => Math.max(prevIndex - productSize, 0));
  };
  const handleNext = () => {
    setInitial((prevIndex) =>
      Math.min(prevIndex + productSize, product.length - productSize)
    );
  };
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setProduct(
          data.map((prd: Product) => ({
            ...prd,
            popularityScore: Number((prd.popularityScore / 20).toFixed(1)),
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
        <MdKeyboardArrowLeft className="move_icon" onClick={handlePrev} />
        <div className="carousel_list">
          {product
            .slice(initial, initial + productSize)
            .map((prd: Product, index: number) => (
              <Carousel product={prd} key={index} />
            ))}
        </div>
        <MdKeyboardArrowRight className="move_icon" onClick={handleNext} />
      </div>
    </>
  );
};

export default ProductList;
