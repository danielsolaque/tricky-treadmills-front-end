import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneReview, updateReview } from "../../services/treadmillsService";

import styles from "../../styles/NewForm.module.css";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reviewToEdit, setReviewToEdit] = useState({
    created_at: "",
    author: "",
    category: "",
    brand: "",
    model: "",
    description: "",
    thumbnail: null,
  });

  useEffect(() => {
    getOneReview(id).then((thisOneReview) => {
      const [review] = thisOneReview;
      setReviewToEdit(review);
    });
  }, [id]);

  function handleTextChange(event) {
    setReviewToEdit({
      ...reviewToEdit,
      [event.target.id]: event.target.value, //quiere decir que si activamos la funcion handle text change (se activa cuando se clickea el check box) esta cambiara al valor contrario del actual
    });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    setReviewToEdit({ ...reviewToEdit, [event.target.id]: file });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateReview(id, reviewToEdit).then((reviewUpdated) => {
      navigate(`/reviews`);
    });
  }
  return (
    <div className={styles.upsert_review_wrapper}>
      <div className={styles.form_card}>
        <header className={styles.upsert_form_header}>
          <h1>Edit review</h1>
        </header>
        <form className={styles.upsert_form} onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={reviewToEdit.title}
              onChange={handleTextChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={reviewToEdit.author}
              onChange={handleTextChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={reviewToEdit.category}
              onChange={handleTextChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              value={reviewToEdit.brand}
              onChange={handleTextChange}
            />
          </div>

          <div className={styles.form_field}>
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={reviewToEdit.model}
              onChange={handleTextChange}
            />
          </div>
          <div className={styles.form_field}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={reviewToEdit.description}
              onChange={handleTextChange}
              rows={5}
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
