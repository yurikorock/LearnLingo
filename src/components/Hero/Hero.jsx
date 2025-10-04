import css from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left_block}>LeftBlock</div>
      <div className={css.right_block}>RightBlock</div>
    </div>
  );
}
