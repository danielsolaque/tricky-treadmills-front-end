import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createNewReview } from "../../services/treadmillsService";

import styles from "../../styles/NewForm.module.css";

export default function New() {
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState({
    created_at: "",
    author: "",
    category: "",
    brand: "",
    model: "",
    description: "",
    thumbnail: null,
  });

  function handleInputChange(event) {
    setNewReview({
      ...newReview,
      [event.target.id]: event.target.value,
    });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    setNewReview({ ...newReview, [event.target.id]: file });
  }

  function handleSubmit(event) {
    event.preventDefault();

    createNewReview(newReview).then((newReviewEnd) => {
      navigate("/reviews");
    });
  }

  return (
    <div className={styles.upsert_review_wrapper}>
      <div className={styles.form_card}>
        <header className={styles.upsert_form_header}>
          <h1>Create new Review</h1>
        </header>
        <form className={styles.upsert_form} onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={newReview.title}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={newReview.author}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={newReview.category}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              value={newReview.brand}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              value={newReview.model}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="description">Description:</label>
            <textarea
              rows={5}
              type="text"
              id="description"
              value={newReview.description}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="thumbnail">Thumbnail:</label>
            <input type="file" id="thumbnail" onChange={handleFileChange} />
          </div>

          <input className={styles.submit_button} type="submit" />
        </form>
      </div>
    </div>
  );
}
