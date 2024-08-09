import "../styles/products.css";
import Card from "./Card";

function Products({ products }) {
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
