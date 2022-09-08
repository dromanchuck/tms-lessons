import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
import styles from "./styles.module.css";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  const handleOnChange = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }

    //2
    // setIsDark(!isDark);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src="/close.png" alt="close" className={styles.closeButton} />
          </button>

          <ul>
            <li>
              <Link to="/">All posts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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
