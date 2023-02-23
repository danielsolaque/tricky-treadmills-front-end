import { useEffect, useState } from "react";
import { getAllReviews } from "./fetch";
import { Link } from "react-router-dom";

import "./ReviewsList.css";

export default function ReviewsList() {
  const [filter, setFilter] = useState("");
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((reviewsList) => {
      setFilteredReviews(reviewsList);
      setReviews(reviewsList);
    });
  }, []);

  useEffect(() => {
    const newReviews = reviews.filter((review) =>
      review.title.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredReviews(newReviews);
  }, [filter, reviews]);

  const handleChangeFilterInput = (e) => setFilter(e.target.value);

  return (
    <div className="reviews-list-container">
      <header>
        <h1>Reviews from our technician comunity:</h1>
      </header>

      <div className="search-bar">
        <h2 className="search-bar-title">Search reviews</h2>
        <input
          placeholder="Search review..."
          className="search-bar-input"
          onChange={handleChangeFilterInput}
        />
      </div>

      <section className="reviews-list">
        {filteredReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <Link to={`/reviews/${review.id}`}>
              <span> {review.title} </span>
            </Link>
            <span> {review.category} </span>
            <span>
              {" "}
              {review.brand} {review.model}{" "}
            </span>
            <span>
              {" "}
              Created By: {review.author} at {review.created_at}{" "}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

// "id": 2,
// "title": "Segundo review",
// "description": "No se que descripcion poner",
// "category": "TIP",
// "brand": "Random brand",
// "model": "Random model",
// "author": "Daniel",
// "is_archive": false,
// "created_at": "2023-02-16T07:14:55.206Z"
