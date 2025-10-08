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
      <div className={css.user}>
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
      </div>
      <ul>{teacher.name}</ul>
    </div>
  );
}
