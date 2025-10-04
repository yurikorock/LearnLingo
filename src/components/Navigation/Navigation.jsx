import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.isActive : css.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) => (isActive ? css.isActive : css.link)}
      >
        Teachers
      </NavLink>
    </div>
  );
}
