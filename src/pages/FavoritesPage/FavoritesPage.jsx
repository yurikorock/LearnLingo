import { useSelector } from "react-redux";
import Header from "../../components/Header/Header.jsx";
import css from "./FavoritesPage.module.css";
import { selectUserId } from "../../redux/auth/selectors.js";
import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";

export default function FavoritesPage() {
//   const userId = useSelector(selectUserId);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     if (!userId) return;
//     const favRef = ref(db, `users/${userId}/favorites`);
//     get(favRef).then((snapshot) => {
//       if (snapshot.exiists()) {
//         const data = Object.values(snapshot.val());
//         setFavorites(data);
//       } else {
//         setFavorites([]);
//       }
//     });
//   }, [userId]);

  return (
    <>
      <Header />
      <div className={css.container}>
        {/* {favorites.length === 0 ? (
          <p>You don`t add any favorites teacher !</p>
        ) : (
          favorites.map(() => {
            <TeacherCard key={teacher.id} teacher={teacher} />;
          })
        )} */}
      </div>
    </>
  );
}
