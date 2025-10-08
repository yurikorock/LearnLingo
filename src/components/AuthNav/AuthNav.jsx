import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink
        to="/auth/login"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
      >
        <svg width="20" height="20">
          <use href="/sprite/sprite.svg#icon-log-in"></use>
        </svg>
        <p>Log in</p>
      </NavLink>
      <NavLink to="/auth/register" className={css.typeBTN}>
        <span>Registration</span>
      </NavLink>
    </div>
  );
}
