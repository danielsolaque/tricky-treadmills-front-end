import { useEffect, useState } from "react";
import { getOneReview, deleteReview } from "../../services/treadmillsService";
import { useParams, Link, useNavigate } from "react-router-dom";

import styles from "./ShowOneReview.module.css";

export default function ShowOne() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [oneReviewState, setOneReviewState] = useState({});

  useEffect(() => {
    getOneReview(id).then((thisOneReview) => {
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
    <div className={styles.review_detail_wrapper}>
      <div className={styles.detail_card}>
        <div>
          <figure className={styles.thumbnail}>
            <img src={oneReviewState.thumbnail_url} />
          </figure>

          <div className={styles.detail_content}>
            <header>
              <h3>Full review</h3>
            </header>

            <div>
              <div className={styles.chip}>
                <span>{oneReviewState.category}</span>
              </div>

              <p>{oneReviewState.description}.</p>

              <div className={styles.button_group}>
                <Link
                  className={`${styles.edit} ${styles.button}`}
                  to={`/Reviews/${id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className={`${styles.delete} ${styles.button}`}
                  onClick={() => deleteNow(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
