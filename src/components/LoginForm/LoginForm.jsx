import css from "./LoginForm.module.css";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice.js";
import { selectModalData } from "../../redux/modal/selectors.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "must be at least 8 characters")
    .max(50, "must be at most 50 characters")
    .required(),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

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
          <h2 className={css.title}>Log In</h2>
          <p className={css.descr}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
        </div>

        {/* ** FORM ** */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* *** BLOCK INPUT *** */}
          <div className={css.input_block}>
            
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
                className={`${css.input} ${errors.password ? css.errors : ""}`}
                {...register("password")}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              {errors.password && (
                <p className={css.error}>{errors.password?.message}</p>
              )}
              <button
                type="button"
                className={css.toggleBtn}
                onClick={() => setShowPassword((e) => !e)}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
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
