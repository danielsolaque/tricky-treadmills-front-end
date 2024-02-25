import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section>
        <p>
          <span>Developed by </span>
          <a href="https://github.com/danielsolaque">Daniel Solaque</a>
          <span>. United States of America, {year.toString()}</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
