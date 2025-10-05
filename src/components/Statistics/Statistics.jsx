import css from "./Statistics.module.css";

export default function Statistics() {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text_number}>32,000+</p>
          <p className={css.text}>Experienced tutors</p>
        </li>
        <li className={css.item}>
          <p className={css.text_number}>300,000+</p>
          <p className={css.text}>5-star tutor reviews</p>
        </li>
        <li className={css.item}>
          <p className={css.text_number}>120+</p>
          <p className={css.text}>Subjects taught</p>
        </li>
        <li className={css.item}>
          <p className={css.text_number}>200+</p>
          <p className={css.text}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
