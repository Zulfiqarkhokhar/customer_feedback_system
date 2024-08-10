import { useState, useEffect } from "react";

function FeedBacks({ feedbacks }) {
  const [totalFeedBacks, setTotalFeedBacks] = useState(feedbacks);
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 3;
  useEffect(() => {
    setTotalFeedBacks(feedbacks);
  }, [feedbacks]);

  const totalPages = Math.ceil(totalFeedBacks.length / feedbacksPerPage);

  const currentFeedbacks = totalFeedBacks.slice(
    (currentPage - 1) * feedbacksPerPage,
    currentPage * feedbacksPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRatingChange = (e) => {
    let stars = e.target.value;
    let val = parseInt(stars.split(" ")[0]);
    if (val >= 1 && val <= 5) {
      let myFeedBacks = feedbacks.filter((feed) => feed.rating === val);
      setTotalFeedBacks(myFeedBacks);
    } else {
      setTotalFeedBacks(feedbacks);
    }
    setCurrentPage(1); // Reset to the first page when filtering
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Customer Feedbacks</h2>
        <div className="row m-5 w-50">
          <select
            name="rating"
            id="feedbackRating"
            onChange={handleRatingChange}
            className="w-25"
          >
            <option>Sort By Rating</option>
            <option>1 Star</option>
            <option>2 Stars</option>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
          </select>
        </div>
        <div className="row">
          {currentFeedbacks.map((feedback) => (
            <div className="col-md-4" key={feedback.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{feedback.title}</h5>
                  <div className="mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`fa fa-star${
                          i < feedback.rating ? "" : "-o"
                        } text-warning`}
                      ></span>
                    ))}
                  </div>
                  <p className="card-text">{feedback.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  style={{
                    backgroundColor: "rgb(165, 239, 239)",
                    color: "#000",
                    marginTop: "auto",
                    border: "solid black 1px",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default FeedBacks;
