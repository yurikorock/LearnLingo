import AuthNav from "../AuthNav/AuthNav.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import  css from "./Header.module.css"

export default function Header() {
  return (
    <header className={css.container}>
      <Logo/>
      <Navigation/>
      <AuthNav/>
    </header>
  );
}
