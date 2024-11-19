import React from "react";
import "./body.css";
import ProductList from "./ProductList/ProductList";

const Body = () => {
  return (
    <main className="content">
      <h3 className="title">Product List</h3>
      <div className="product_list">
        <ProductList />
      </div>
    </main>
  );
};

export default Body;
