import { useDispatch } from "react-redux";
import css from "./ModalBookTrial.module.css";
import { closeModal } from "../../redux/modal/slice.js";
import { useEffect } from "react";

export default function ModalBookTrial() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

    // --- Закриття при кліку на backdrop ---
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // --- Закриття при натисканні ESC ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={handleClose}>
          <svg className={css.closeBtn_icon} width="32" height="32">
            <use href="/sprite/sprite.svg#icon-close-x"></use>
          </svg>
        </button>
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
        <h3 className={css.title_quest}>
          What is your main reason for learning English?
        </h3>
        <button className={css.modal_btn}>Book</button>
      </div>
    </div>
  );
}
