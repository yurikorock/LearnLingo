import { useSelector } from "react-redux";
import Header from "../../components/Header/Header.jsx";
import css from "./FavoritesPage.module.css";
import { selectUserId } from "../../redux/auth/selectors.js";
import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { ref, get } from "firebase/database";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

export default function FavoritesPage() {
  const userId = useSelector(selectUserId);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const favRef = ref(db, `users/${userId}/favorites`);
    get(favRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setFavorites(data);
        } else {
          setFavorites([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return (
    <>
    
      <div className={css.container}>
        {isLoading ? (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        ) : favorites.length === 0 ? (
          <p>You don`t have any favorite teachers yet!</p>
        ) : (
          favorites.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))
        )}
      </div>
    </>
  );
}
