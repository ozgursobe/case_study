import "./body.css";
import ProductList from "./ProductList/ProductList";

const Body = () => {
  return (
    <main className="content">
      <h3 className="prd_title">Product List</h3>
      <div className="prd_section">
        <ProductList />
      </div>
    </main>
  );
};

export default Body;
