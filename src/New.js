import { createNewReview } from "./fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewForm.css";

export default function New() {
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState({
    created_at: "",
    author: "",
    category: "",
    brand: "",
    model: "",
    description: "",
  });

  function handleInputChange(event) {
    setNewReview({
      ...newReview,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const acumulatedReview = {
    //   ...newReview,
    //   newReview,
    // };

    createNewReview(newReview).then((newReviewEnd) => {
      navigate("/reviews");
    });
  }

  return (
    <div>
      <header className="upsert-form-header">
        <h1>Create new Review</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newReview.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Name</label>
          <input
            type="text"
            id="author"
            value={newReview.author}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={newReview.category}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            value={newReview.brand}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            value={newReview.model}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={newReview.description}
            onChange={handleInputChange}
          />
        </div>

        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
