import css from "./TeacherCard.module.css"

export default function TeacherCard({teacher}){
    return (
        <div>
            <ul>{teacher.name}</ul>
        </div>
    )
}