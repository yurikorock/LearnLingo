import css from "./Loader.module.css";
import { PulseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div>
      <PulseLoader
        className={css.loader}
        color="#f4c550"
        margin={8}
        size={15}
      />
    </div>
  );
}
