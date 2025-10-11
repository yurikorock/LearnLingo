import css from "./UserDetail.module.css";

export default function UserDetails({ reviews }) {
  return (
    <div>
      <ul className={css.container}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index} className={css.reviewer_block}>
            <div className={css.reviewer_info}>
              <svg className={css.icon_avatar} width="44" height="44" >
                <use href="/sprite/sprite.svg#icon-github"></use>
              </svg>
              <div className={css.reviewer_data}>
                <p className={css.reviewer_name}>{reviewer_name}</p>
                <div className={css.reviewer_rating}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/sprite/sprite.svg#icon-star"></use>
                  </svg>
                  <p className={css.rating}>{reviewer_rating}</p>
                </div>
              </div>
            </div>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
