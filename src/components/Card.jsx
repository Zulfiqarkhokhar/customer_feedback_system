import "../styles/card.css";

function Card({ product }) {
  const truncateText = (text, charLimit) => {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };
  return (
    <>
      <div className="card" style={{ width: "13rem" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{truncateText(product.title, 30)}</h5>
          <h6 className="card-title">{`Price: $${product.price}`}</h6>
          <p className="card-text">{truncateText(product.description, 50)}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
