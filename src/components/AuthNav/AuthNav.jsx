//AuthNav.jsx
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { removeUser } from "../../redux/auth/userSlice.js";

export default function AuthNav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogin = () => {
    dispatch(openModal({ type: "login" }));
  };
  const handleRegistration = () => {
    dispatch(openModal({ type: "registration" }));
  };
  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <button onClick={handleLogout} className={css.link}>
          <svg width="20" height="20">
            <use href="/sprite/sprite.svg#icon-log-in"></use>
          </svg>
          <p>Log out</p>
        </button>
      ) : (
        <>
          <button onClick={handleLogin} className={css.link}>
            <svg width="20" height="20">
              <use href="/sprite/sprite.svg#icon-log-in"></use>
            </svg>
            <p>Log in</p>
          </button>
          <button onClick={handleRegistration} className={css.typeBTN}>
            <span>Registration</span>
          </button>
        </>
      )}
    </div>
  );
}
