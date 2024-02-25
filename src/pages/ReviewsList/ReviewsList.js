import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils/dates";
import { getAllReviews } from "../../services/treadmillsService";

import styles from "./ReviewsList.module.css";

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
    <div className={styles.reviews_list_container}>
      <div className={styles.search_bar}>
        <input
          placeholder="Search review..."
          className={styles.search_bar_input}
          onChange={handleChangeFilterInput}
        />
      </div>

      <section className={styles.reviews_list}>
        {filteredReviews.map((review) => (
          <div className={styles.review_card} key={review.id}>
            <figure>
              <img src={review.thumbnail_url} />
            </figure>

            <section className={styles.content}>
              <header>
                <div>
                  <Link to={`/reviews/${review.id}`}>
                    <h3>{review.title}</h3>
                  </Link>
                </div>

                <div className={styles.info}>
                  <span>Brand: {review.brand}</span>
                  <span>Model: {review.model} </span>
                </div>
              </header>

              <div className={styles.description}>
                <p>{review.description}</p>
              </div>

              <footer>
                <div className={styles.chip}>
                  <span>{review.category}</span>
                </div>

                <div>
                  <div>
                    Created by {review.author} at{" "}
                    {formatDate(new Date(review.created_at))}
                  </div>
                </div>
              </footer>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
