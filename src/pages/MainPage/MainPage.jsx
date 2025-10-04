import Hero from "../../components/Hero/Hero.jsx";
import css from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={css.container}>
      <Hero />
      {/* <Statistics/> */}
    </div>
  );
}
