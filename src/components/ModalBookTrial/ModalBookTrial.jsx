import { useDispatch, useSelector } from "react-redux";
import css from "./ModalBookTrial.module.css";
import { closeModal } from "../../redux/modal/slice.js";
import { selectModalData } from "../../redux/modal/selectors.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number"),
});

export default function ModalBookTrial() {
  const dispatch = useDispatch();
  const [mainReason, setMainReason] = useState("career"); // початковий вибір
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

    // ---- Заблокувати скрол ----
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // додаємо padding-right, щоб сторінка не "стрибає"
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    // коли модалка відкрита — блокуємо скрол
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
      // коли закривається — повертаємо
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setMainReason("career");
  };

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
            <p className={css.select_name}>
              {teacher?.name} {teacher?.surname}
            </p>
          </div>
        </div>
        {/* ** FORM ** */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={css.title_quest}>
            What is your main reason for learning English?
          </h3>
          <div className={css.radioBlock}>
            <label className={css.label_radio}>
              <input
                className={css.radioBtn}
                type="radio"
                {...register("mainreason")}
                value="career"
                checked={mainReason === "career"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span>
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
                {...register("mainreason")}
                value="lesson"
                checked={mainReason === "lesson"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span>
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
                {...register("mainreason")}
                value="living"
                checked={mainReason === "living"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span>
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
                {...register("mainreason")}
                value="exams"
                checked={mainReason === "exams"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span>
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
                {...register("mainreason")}
                value="culture"
                checked={mainReason === "culture"}
                onChange={(e) => setMainReason(e.target.value)}
              />
              <span>
                <svg className={css.checkbox} width="20" height="20">
                  <use href="/sprite/sprite.svg#icon-check-box"></use>
                </svg>
              </span>
              Culture, travel or hobby
            </label>
          </div>

          {/* *** BLOCK INPUT *** */}
          <div className={css.input_block}>
            <div className={css.input_wrap}>
              <input
                className={`${css.input} ${errors.fullName ? css.errors : ""}`}
                {...register("fullName")}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className={css.error}>{errors.fullName?.message}</p>
              )}
            </div>
            <div className={css.input_wrap}>
              <input
                className={`${css.input} ${errors.email ? css.errors : ""}`}
                {...register("email")}
                placeholder="Email"
              />
              {errors.email && (
                <p className={css.error}>{errors.email?.message}</p>
              )}
            </div>
            <div className={css.input_wrap}>
              <input
                className={`${css.input} ${errors.phoneNumber? css.errors : ""}`}
                {...register("phoneNumber")}
                placeholder="Phone number"
              />
              {errors.phoneNumber && (
                <p className={css.error}>{errors.phoneNumber?.message}</p>
              )}
            </div>
          </div>
          <button className={css.modal_btn} type="submit">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
