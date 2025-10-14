import { useDispatch, useSelector } from "react-redux";
import css from "./ModalBookTrial.module.css";
import { closeModal } from "../../redux/modal/slice.js";
import { selectModalData } from "../../redux/modal/selectors.js";
import { useEffect, useState } from "react";

export default function ModalBookTrial() {
  const dispatch = useDispatch();
  const [mainReason, setMainReason] = useState("career"); // початковий вибір
  const handleClose = () => {
    dispatch(closeModal());
  };

  const teacher = useSelector(selectModalData);

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
          <img
            className={css.icon_avatar}
            src={teacher?.avatar_url}
            alt={`${teacher?.name} ${teacher?.surname}`}
            width="44"
            height="44"
          />
          {/* <svg className={css.icon_avatar} width="44" height="44">
            <use href="/sprite/sprite.svg#icon-github"></use>
          </svg> */}
          <div className={css.select_data}>
            <p className={css.select_descr}>Your teacher</p>
            <p className={css.select_name}>
              {teacher?.name} {teacher?.surname}
            </p>
          </div>
        </div>
        <form>
          <h3 className={css.title_quest}>
            What is your main reason for learning English?
          </h3>
          <div className={css.radioBlock}>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                name="mainreason"
                value="career"
                checked={mainReason === "career"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span >
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Career and business
            </label>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                name="mainreason"
                value="lesson"
                checked={mainReason === "lesson"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span >
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Lesson for kids
            </label>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                name="mainreason"
                value="living"
                checked={mainReason === "living"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span >
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Living abroad
            </label>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                name="mainreason"
                value="exams"
                checked={mainReason === "exams"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span >
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Exams and coursework
            </label>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                name="mainreason"
                value="culture"
                checked={mainReason === "culture"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span >
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Culture, travel or hobby
            </label>
          </div>
        </form>
        <button className={css.modal_btn}>Book</button>
      </div>
    </div>
  );
}
