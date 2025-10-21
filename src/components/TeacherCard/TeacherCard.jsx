import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./TeacherCard.module.css";
import UserDetails from "../UserDetails/UserDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";
import { selectUserId } from "../../redux/auth/selectors.js";
import { ref, set, remove, get } from "firebase/database";
import { db } from "../../firebase.js";
import toast from "react-hot-toast";

export default function TeacherCard({ teacher }) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const [selected, setSelected] = useState("A1 Beginner");
  const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector(selectUserId);
  const [isFavorite, setIsFavorite] = useState(false);

  // перевірка чи є вчитель обраним
  useEffect(() => {
    if (!userId) {
      return;
    }
    const favRef = ref(db, `users/${userId}/favorites/${id}`);
    get(favRef).then((snapshot) => {
      if (snapshot.exists()) setIsFavorite(true);
    });
  }, [userId, id]);

  //додавання видалення з обраного
  const handleToggleFavorite = async () => {
    if (!userId) {
      toast.error("Please log in to add favorites!");
      return;
    }
    const favRef = ref(db, `users/${userId}/favorites/${id}`);
    if (isFavorite) {
      await remove(favRef);
      setIsFavorite(false);
    } else {
      await set(favRef, teacher);
      setIsFavorite(true);
    }
  };

  const handleBookTrial = () => {
    dispatch(
      openModal({ type: "bookTrial", data: { avatar_url, name, surname } })
    );
  };

  return (
    <div className={css.container}>
      <section className={css.user}>
        <div className={css.avatarWrap}>
          <img
            className={css.avatar}
            src={avatar_url}
            alt={`${name}${surname}`}
          />
          <svg className={css.is_online} width="12" height="12">
            <use href="/sprite/sprite.svg#icon-green-circle"></use>
          </svg>
        </div>
      </section>
      <section className={css.profile_info}>
        <div className={css.teacher_info}>
          <div className={css.name_wrap}>
            <p className={css.languages}>Languages</p>
            <h3 className={css.teacher_name}>{`${name} ${surname}`}</h3>
          </div>

          <ul className={css.rating}>
            <li className={css.rating_item}>
              <svg className={css.icon_book} width="16" height="16">
                <use href="/sprite/sprite.svg#icon-book-open"></use>
              </svg>
              <p>Lessons online</p>
            </li>
            <li className={css.rating_item}>
              <p>{`Lessons done: ${lessons_done}`}</p>
            </li>
            <li className={css.rating_item}>
              <svg className={css.icon_star} width="16" height="16">
                <use href="/sprite/sprite.svg#icon-star"></use>
              </svg>
              <p>{`Rating: ${rating}`}</p>
            </li>
            <li className={css.rating_item}>
              <p>
                Price / 1 hour: 
                <span className={css.price}>{` ${price_per_hour}$`}</span>
              </p>
            </li>
          </ul>

          <button
            onClick={handleToggleFavorite}
            className={`${css.favorite_btn} ${isFavorite ? css.active : ""} `}
            type="button"
          >
            <svg className={css.hear} width="26" height="26">
              <use href="/sprite/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
        <div className={css.teacher_descr}>
          <p>
            Speaks: <span>{languages.join(", ")}</span>
          </p>
          <p>
            Lesson Info: <span>{lesson_info}</span>
          </p>
          <p>
            Conditions: <span>{conditions}</span>
          </p>
        </div>
        <button
          type="button"
          className={css.link}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Hide details" : "Read more"}
        </button>
        {isOpen && (
          <div>
            <p className={css.experience}>{experience}</p>
            <UserDetails reviews={reviews} />
          </div>
        )}

        <div className={css.toggle_container}>
          {levels.map((level) => (
            <button
              key={level}
              className={`${css.toggle_btn} ${
                selected === level ? css.active : ""
              }`}
              onClick={() => setSelected(level)}
            >
              {level}
            </button>
          ))}
        </div>
        {isOpen && (
          <button className={css.trialLessonBtn} onClick={handleBookTrial}>
            Book trial lesson
          </button>
        )}
      </section>
    </div>
  );
}
