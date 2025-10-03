import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.css"

export default function Layout (){
    return (<>
        <Header/>
        {/* <ModalContainer/> */}
        <main className={css.main}>
            <Outlet />
          </main>
        {/* <Footer/> */}
    </>)
}