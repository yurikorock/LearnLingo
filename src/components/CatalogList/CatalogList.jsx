import Loader from "../Loader/Loader.jsx";
import css from "./CatalogList.module.css";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTeacherList,
  selectPage,
  selectTotal,
} from "../../redux/teachers/selectors.js";
import { getTeachersList } from "../../redux/teachers/operations.js";
import {
  selectLanguage,
  selectLevel,
  selectPrice,
} from "../../redux/filters/selectors.js";
import { nextPage, resetTeachers } from "../../redux/teachers/teachersSlice.js";

export default function CatalogList() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeacherList);
  const isLoading = useSelector(selectIsLoading);
  const language = useSelector(selectLanguage);
  const level = useSelector(selectLevel);
  const price = useSelector(selectPrice);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(resetTeachers());
    dispatch(
      getTeachersList({
        language,
        level,
        price,
        page:1,
      })
    );
  }, [language, level, price, dispatch]); 

  const handleLoadMore = () => {
    dispatch(nextPage());
    dispatch(getTeachersList({ page: page + 1 }));
  };

  const canLoadMore = teachers.length < total;

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
      {canLoadMore && !isLoading && (
        <button className={css.loadMoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

