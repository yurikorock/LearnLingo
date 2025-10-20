import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navigation}>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? css.isActive : css.link)}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? css.isActive : css.link)}
          >
            Teachers
          </NavLink>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
