import Header from "../../components/Header/Header.jsx";
import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <h3>Favorites</h3>
      </div>
    </>
  );
}
