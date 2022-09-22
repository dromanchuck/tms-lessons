import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
import styles from "./styles.module.css";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark, user } = useContext(Context);
  const [activeStyle, setActiveStyle] = useState("");

  const handleOnChange = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const handleClose = () => {
    setActiveStyle(styles.hide);

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className={`${styles.navBar} ${activeStyle}`}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={handleClose} className={styles.close}>
            <img src="/close.png" alt="close" className={styles.closeButton} />
          </button>

          <ul>
            {user ? null : (
              <>
                <li>
                  <Link to="/">All posts</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
        <DarkModeToggle inputChecked={isDark} onChange={handleOnChange} />
      </div>
    </div>
  );
};
