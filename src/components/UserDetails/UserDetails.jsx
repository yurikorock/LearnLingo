import css from "./UserDetail.module.css";

export default function UserDetails({ reviews }) {
  return (
    <div>
      <ul className={css.container}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <p>{reviewer_name}</p>
            <p>{reviewer_rating}</p>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
