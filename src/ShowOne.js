import { useEffect, useState } from "react";
import { getOneReview, deleteReview } from "./fetch";
import { useParams, Link, useNavigate } from "react-router-dom";

// import "./ShowOne.css";

export default function ShowOne() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const navigate = useNavigate()
  const [oneReviewState, setOneReviewState] = useState({});

  useEffect(() => {
    getOneReview(id).then((thisOneReview) => {
      // === thisOneReview[0]
      const [review] = thisOneReview;

      setOneReviewState(review);
    });
  }, [id]);

  function deleteNow(id) {
    deleteReview(id).then((ReviewDeleted) => {
      navigate(`/reviews`);
    });
  }

  return (
    <div className="Review-detail">
      <header>
        <h1>Full review</h1>
      </header>

      <div className="Review-detail-card">
        <p>
          <b>Date:</b> {oneReviewState.created_at}.
        </p>
        <p>
          <b>Author:</b> {oneReviewState.author}.
        </p>
        <p>
          <b>Category:</b> {oneReviewState.category}.
        </p>
        <p>
          <b>Brand:</b> {oneReviewState.brand}.
        </p>
        <p>
          <b>Model:</b> {oneReviewState.model}.
        </p>
        <p>
          <b>Description:</b> {oneReviewState.description}.
        </p>
        <br />

        <div className="Review-detail-buttons">
          <Link
            className="Review-detail-button edit-bg"
            to={`/Reviews/${id}/edit`}
          >
            Edit
          </Link>
          <br />
          <button
            className="Review-detail-button delete-bg"
            onClick={() => deleteNow(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
