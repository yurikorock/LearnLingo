import Loader from '../Loader/Loader.jsx'
import css from './CatalogList.module.css'
import teachers from "../../teachers.json"
import TeacherCard from '../TeacherCard/TeacherCard.jsx'



export default function CatalogList(){
    return (
        <div>
        {/* <Loader/> */}
        <ul className={css.list}>
            {teachers.map(teacher => (<TeacherCard key={teacher.id} teacher={teacher}/>))}
            {/* <TeacherCard/> */}
        </ul>
        </div>
    )
}