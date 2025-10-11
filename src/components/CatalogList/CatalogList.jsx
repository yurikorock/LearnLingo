import Loader from "../Loader/Loader.jsx";
import css from "./CatalogList.module.css";
import teachers from "../../teachers.json";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function CatalogList() {

  useEffect(() => {}, []);// отримати дані вчителів, записати в стан

  return (
    <div>
      {/* <Loader/> */}
      <ul className={css.list}>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </ul>
     
    </div>
  );
}
