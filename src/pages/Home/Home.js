import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export default function Home() {
  const TREADMILLS_IMG_SRC =
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section className={styles.home}>
      <img
        className={styles.img_background}
        src={TREADMILLS_IMG_SRC}
        alt="treadmills"
      />

      <div className={styles.home_content_wrapper}>
        <div className={styles.home_content}>
          <header>
            <h2>Welcome to the most completeful treadmills reviews database</h2>
            <h3>Search, find and fix your treadmill's issue</h3>
          </header>

          <div className={styles.button_group}>
            <Link to="/reviews" className={styles.button}>
              See all reviews
            </Link>

            <Link to="/reviews/new" className={styles.button}>
              Create new review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
