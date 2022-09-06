import { useState } from "react";
import { NavBar } from "../NavBar";

import styles from "./styles.module.css";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  return (
    <nav className={styles.header}>
      <button className={styles.menu} onClick={openNavBar}>
        <img src="/menu.svg" alt="menu" className={styles.menuButton} />
      </button>

      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </nav>
  );
};
