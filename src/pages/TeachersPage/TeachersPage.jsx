import { Outlet } from "react-router-dom";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import css from "./TeachersPage.module.css";
import ModalBookTrial from "../../components/ModalBookTrial/ModalBookTrial.jsx";

export default function TeachersPage() {
  return (
    <div className={css.container}>
      <Filter />
      <CatalogList />
      <ModalBookTrial/>
    </div>
  );
}
