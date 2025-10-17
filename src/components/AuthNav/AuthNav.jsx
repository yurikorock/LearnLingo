//AuthNav.jsx
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";

export default function AuthNav() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(openModal({ type: "login" }));
  };
  const handleRegistration = () => {
    dispatch(openModal({ type: "registration" }));
  };

  return (
    <div className={css.container}>
      <button onClick={handleLogin} className={css.link}>
        <svg width="20" height="20">
          <use href="/sprite/sprite.svg#icon-log-in"></use>
        </svg>
        <p>Log in</p>
      </button>
      <button onClick={handleRegistration} className={css.typeBTN}>
        <span>Registration</span>
      </button>
    </div>
  );
}
