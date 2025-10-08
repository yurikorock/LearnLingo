import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={css.container} to="/">
      <div className={css.logo}>
        <svg className={css.icon} width="28" height="28">
          <use href="/sprite/sprite.svg#icon-ukraine"></use>
        </svg>
        <p className={css.text}>LearnLingo</p>
      </div>
    </Link>
  );
}
