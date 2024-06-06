import { useEffect, useRef } from "react";

import "./ProfileModal.css";
import Button from "../Button/Button";

import closeImg from "./../../images/icons/cancel.svg";

export default function EditModal({ type, open, setOpen }) {
  const dialog = useRef();
  const input = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
    if (type === "specific") {
      dialog.current.style.height = '250px';
    }
  }, [open]);

  function editValue(){

  }
  function resetValue(){
    
  }

  let placehold;
  if (type === "name") placehold = "Enter your name";
  if (type === "specific") placehold = "Enter your specific";


  return (
    <dialog className="modalDialog editDialog" ref={dialog}>
      <h2>Edit the field ...</h2>
      <div className="editDialog__content">
        {type === "name" && (
          <input
            type="text"
            placeholder={placehold}
            className="editModal__input"
          />
        )}
        {type === "specific" && (
          <textarea
            placeholder={placehold}
            className="editModal__textarea"
          ></textarea>
        )}
      </div>
      <Button
        onClick={() => {
          setOpen(false);
        }}
      >
        <img src={closeImg} className="completedClose-img" />
      </Button>
      <div className="editModal__actionsButtons">
        <Button onClick={editValue}>Добавить</Button>
        <Button onClick={resetValue}>Сбросить</Button>
      </div>
    </dialog>
  );
}
