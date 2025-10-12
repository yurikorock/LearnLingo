import { useSelector } from "react-redux";
import ModalBookTrial from "../ModalBookTrial/ModalBookTrial.jsx";
import {
  selectIsModalOpen,
  selectModalType,
} from "../../redux/modal/selectors.js";

export default function ModalContainer() {
    
  const isOpen = useSelector(selectIsModalOpen);
  const type = useSelector(selectModalType);
  if (!isOpen) return null;

  return <>{type === "bookTrial" && <ModalBookTrial />}</>;
}
