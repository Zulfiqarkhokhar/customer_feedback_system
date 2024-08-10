import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeedBacks from "./FeedBacks";
import { Modal, Button } from "react-bootstrap";

function Product() {
  const { id } = useParams();
  console.log(id);
  const [feedbacks, setFeedBacks] = useState([
    {
      id: 1,
      title: "Excellent Service",
      rating: 5,
      description: "The customer service was outstanding and very helpful.",
    },
    {
      id: 2,
      title: "Great Product Quality",
      rating: 4,
      description:
        "The product quality exceeded my expectations. Highly recommended!",
    },
    {
      id: 3,
      title: "Average Experience",
      rating: 3,
      description:
        "The experience was okay, but there were some delays in delivery.",
    },
    {
      id: 4,
      title: "Poor Support",
      rating: 2,
      description:
        "The support team took too long to respond and wasn't very helpful.",
    },
    {
      id: 5,
      title: "Terrible Experience",
      rating: 1,
      description:
        "Very dissatisfied with the service. The product arrived damaged.",
    },
  ]);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState({
    title: "",
    rating: "5 Stars",
    description: "",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackObject = {
      id: Date.now(),
      title: feedback.title,
      rating: parseInt(feedback.rating[0]), // Extracts the first digit (1-5) from the rating string
      description: feedback.description,
    };

    setFeedBacks((pre) => {
      return [feedbackObject, ...pre];
    });
    console.log(feedbacks);

    // Close the modal after submission
    handleClose();

    // Reset the form fields
    setFeedback({
      title: "",
      rating: "5 Stars",
      description: "",
    });
  };

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
        <div className="row m-5">
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
            <div>
              <button
                className="btn btn-primary my-4"
                style={{
                  backgroundColor: "rgb(165, 239, 239)",
                  color: "#000",
                  marginTop: "auto",
                  border: "none",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                Buy Now
              </button>
              <button
                className="btn btn-primary m-4"
                style={{
                  backgroundColor: "rgb(165, 239, 239)",
                  color: "#000",
                  marginTop: "auto",
                  border: "none",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onClick={handleShow}
              >
                Add Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Feedback Form */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit Your Feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="feedbackTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="feedbackTitle"
                  name="title"
                  value={feedback.title}
                  onChange={handleChange}
                  placeholder="Enter feedback title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="feedbackRating">Rating</label>
                <select
                  className="form-control"
                  id="feedbackRating"
                  name="rating"
                  value={feedback.rating}
                  onChange={handleChange}
                  required
                >
                  <option>1 Star</option>
                  <option>2 Stars</option>
                  <option>3 Stars</option>
                  <option>4 Stars</option>
                  <option>5 Stars</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="feedbackDescription">Description</label>
                <textarea
                  className="form-control"
                  id="feedbackDescription"
                  name="description"
                  rows="3"
                  value={feedback.description}
                  onChange={handleChange}
                  placeholder="Enter feedback description"
                  required
                ></textarea>
              </div>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="mt-3"
              >
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="mt-3 float-end"
                style={{
                  backgroundColor: "rgb(165, 239, 239)",
                  color: "#000",
                  border: "none",
                  fontWeight: "500",
                }}
              >
                Submit Feedback
              </Button>
            </form>
          </Modal.Body>
        </Modal>

        <FeedBacks feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default Product;
