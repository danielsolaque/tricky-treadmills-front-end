import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <header className={styles.navbar}>
        <article>
          <h1>
            <Link to="/">
              <span>Tricky-Treadmill App</span>
            </Link>
          </h1>
        </article>

        <nav>
          <ul>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/reviews/new">New Review</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
