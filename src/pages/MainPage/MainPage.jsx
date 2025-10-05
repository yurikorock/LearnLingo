import Hero from "../../components/Hero/Hero.jsx";
import Statistics from "../../components/Statistics/Statistics.jsx";
import css from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={css.container}>
      <Hero />
      <Statistics/>
    </div>
  );
}
