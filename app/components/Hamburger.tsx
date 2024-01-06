import React from "react";
import styles from "./Hamburger.module.css"; // Adjust the path as necessary

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
    <button onClick={onClick} className={isOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}>
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner} />
        <span className={styles.hamburgerInner} />
        <span className={styles.hamburgerInner} />
      </span>
    </button>
  );
};


export default Hamburger;
