import { useEffect, useRef } from "react";
import closeImg from "./../../images/icons/cancel.svg";
import "./ProfileModal.css";
import Button from "../Button/Button";
import CompletedTasks from "./CompletedTasks";
import { useSelector } from "react-redux";

export default function CompletedModal({ open, setOpen }) {
  const completedArr = useSelector(state => state.todos.complTodos)
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog className="modalDialog" ref={dialog}>
      <h2>Completed tasks: {completedArr.length}</h2>
      
      <Button
        onClick={() => {
          setOpen(false);
        }}
      >
        <img src={closeImg} className="completedClose-img" />
      </Button>

      <ul className="completedTasks__list">
        {completedArr.map((el) => (
          <CompletedTasks
            title={el.title}
            priority={el.priority}
            key={el.id}
          />
        ))}
      </ul>
    </dialog>
  );
}
