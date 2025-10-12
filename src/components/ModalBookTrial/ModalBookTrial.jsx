import css from "./ModalBookTrial.module.css";

export default function ModalBookTrial() {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.title_wrap}>
          <h2 className={css.title}>Trial Lesson Modal</h2>
          <p className={css.descr}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
        </div>
        <div className={css.select_teacher}>
          <svg className={css.icon_avatar} width="44" height="44">
            <use href="/sprite/sprite.svg#icon-github"></use>
          </svg>
          <div className={css.select_data}>
            <p className={css.select_descr}>Your teacher</p>
            <p className={css.select_name}>Jane Smith</p>
          </div>
        </div>
        <h3 className={css.title_quest}>What is your main reason for learning English?</h3>
        <button className={css.modal_btn}>Book</button>
      </div>
    </div>
  );
}
