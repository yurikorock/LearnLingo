import CatalogList from "../../components/CatalogList/CatalogList.jsx"
import Filter from "../../components/Filter/Filter.jsx"
import css from  "./TeachersPage.module.css"

export default function TeachersPage(){
    return(
        <div className={css.container}>
        <Filter/>
        <CatalogList/>

        </div>
    )
}