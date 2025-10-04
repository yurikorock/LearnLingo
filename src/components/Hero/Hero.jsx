import { NavLink } from "react-router-dom";
import css from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left_block}>
        <h1 className={css.title}>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" className={css.typeBTN}>
          <span>Get started</span>
        </NavLink>
      </div>
      <div className={css.right_block}>RightBlock</div>
    </div>
  );
}
