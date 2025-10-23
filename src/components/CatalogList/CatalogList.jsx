import Loader from "../Loader/Loader.jsx";
import css from "./CatalogList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTeacherList,
} from "../../redux/teachers/selectors.js";
import { getTeachersList } from "../../redux/teachers/operations.js";
import {
  selectLanguage,
  selectLevel,
  selectPrice,
} from "../../redux/filters/selectors.js";

export default function CatalogList() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeacherList);
  const isLoading = useSelector(selectIsLoading);
  const language = useSelector(selectLanguage);
  const level = useSelector(selectLevel);
  const price = useSelector(selectPrice);

  useEffect(() => {
    dispatch(
      getTeachersList({
        language,
        level,
        price,
      })
    );
  }, [language, level, price, dispatch]); // отримати дані вчителів, записати в стан

  return (
    <div>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}

      <ul className={css.list}>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </ul>
    </div>
  );
}

