import css from "./TeacherCard.module.css";

export default function TeacherCard({ teacher }) {
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
          <p className={css.languages}>Languages</p>
          <h3 className={css.teacher_name}>{`${name} ${surname}`}</h3>
          <ul className={css.rating}>
            <li>
              <svg className={css.icon_book} width="16" height="16">
                <use href="/sprite/sprite.svg#icon-book-open"></use>
              </svg>
              <p>Lessons online</p>
            </li>
            <li>
              <p>{`Lessons done: ${lessons_done}`}</p>
            </li>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite/sprite.svg#icon-star"></use>
              </svg>
              <p>{`Rating: ${rating}`}</p>
            </li>
            <li>
              <p>
                Price / 1 hour: <span>{rating}$</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
