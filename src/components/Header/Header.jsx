import Logo from "../Logo/Logo.jsx";
import  css from "./Header.module.css"

export default function Header() {
  return (
    <header className={css.container}>
      <Logo/>
    </header>
  );
}
