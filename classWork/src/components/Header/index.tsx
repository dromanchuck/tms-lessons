import { useContext, useState } from "react";
import { Context } from "../../App";
import { NavBar } from "../NavBar";

import styles from "./styles.module.css";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const { user, isDark } = useContext(Context);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  return (
    <>
      <nav className={`${styles.header} ${isDark ? styles.darkHeader : ""}`}>
        <button className={styles.menu} onClick={openNavBar}>
          <img src="/menu.svg" alt="menu" className={styles.menuButton} />
          <div className={styles.menuButton} />
        </button>
        {user ? <h2>{user?.username}</h2> : null}
      </nav>
      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </>
  );
};
