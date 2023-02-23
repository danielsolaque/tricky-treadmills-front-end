import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneReview, updateReview } from "./fetch";

import "./NewForm.css";

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

  function handleSubmit(event) {
    event.preventDefault();
    updateReview(id, reviewToEdit).then((reviewUpdated) => {
      navigate(`/reviews`);
    });
  }
  return (
    <div>
      <header className="upsert-form-header">
        <h1>Edit review</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={reviewToEdit.title}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Name</label>
          <input
            type="text"
            id="author"
            value={reviewToEdit.author}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={reviewToEdit.category}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            value={reviewToEdit.brand}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            value={reviewToEdit.model}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={reviewToEdit.description}
            onChange={handleTextChange}
          />
        </div>

        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
