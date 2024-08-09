import "../styles/card.css";
import { Link } from "react-router-dom";

function Card({ product }) {
  const truncateText = (text, charLimit) => {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };
  return (
    <>
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "20rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: "contain", height: "12rem" }}
        />
        <div
          className="card-body"
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <h5 className="card-title">{truncateText(product.title, 30)}</h5>
          <h6 className="card-title">{`Price: $${product.price}`}</h6>
          <p className="card-text">{truncateText(product.description, 50)}</p>
          <Link
            to={`/${product.id}`}
            className="btn btn-primary mt-auto"
            style={{
              backgroundColor: "rgb(165, 239, 239)",
              color: "#000",
              marginTop: "auto",
              border: "none",
              fontWeight: "500",
              textDecoration: "none", // Remove underline
            }}
          >
            More Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
