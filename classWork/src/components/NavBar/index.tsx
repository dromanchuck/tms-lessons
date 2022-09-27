import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { Button } from "../Button";
import { DarkModeToggle } from "../DarkModeToggle";
import styles from "./styles.module.css";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark, user, setUser } = useContext(Context);
  const [activeStyle, setActiveStyle] = useState("");
  const navigate = useNavigate();

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

  const logout = () => {
    navigate("/");
    setUser(null);

    localStorage.clear();
  };

  return (
    <div className={`${styles.navBar} ${activeStyle}`}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={handleClose} className={styles.close}>
            <img src="/close.png" alt="close" className={styles.closeButton} />
          </button>

          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/">All posts</Link>
                </li>
                <li>
                  <Link to="/myposts">My posts</Link>
                </li>
                <li>
                  <Link to="/add-post">Add new post</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">All posts</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/registration">Registration</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {user ? <Button text="Logout" onClick={logout} type="primary" /> : null}
        <DarkModeToggle inputChecked={isDark} onChange={handleOnChange} />
      </div>
    </div>
  );
};
