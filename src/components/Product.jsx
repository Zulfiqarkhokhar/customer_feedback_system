import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProduct(data);
      console.log(data);
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className=" row m-5">
          <div className="col d-flex justify-content-center align-items-center">
            <img src={product.image} alt={product.image} className="w-50" />
          </div>
          <div className="col">
            <h2 className="my-3">{product.title}</h2>
            <h5
              className="my-3"
              style={{
                color: "blue",
              }}
            >{`Price: $${product.price}`}</h5>
            <p
              className="my-3"
              style={{
                fontSize: "17px",
              }}
            >
              {product.description}
            </p>
            <button
              className="btn btn-primary my-4"
              style={{
                backgroundColor: "rgb(165, 239, 239)",
                color: "#000",
                marginTop: "auto",
                border: "none",
                fontWeight: "500",
                textDecoration: "none", // Remove underline
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
