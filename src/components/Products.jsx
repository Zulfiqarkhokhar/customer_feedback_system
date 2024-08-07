import { useEffect, useState } from "react";
import "../styles/products.css";
import Card from "./Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="m-5">
          <h4 className="heading">New Arrivals</h4>
          <div className="cards">
            {products.map((product) => {
              return <Card key={product.id} product={product}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
