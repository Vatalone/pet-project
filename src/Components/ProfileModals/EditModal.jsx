import { useEffect, useRef } from "react";

import "./ProfileModal.css";
import Button from "../Button/Button";

import closeImg from "./../../images/icons/cancel.svg";
import { useDispatch } from "react-redux";
import { editName, editSpecific, resetName, resetSpecific } from "../../store/editSlice";

export default function EditModal({ type, open, setOpen }) {
  const dialog = useRef();
  const input = useRef();
  const textarea = useRef();

  const dispatch = useDispatch();

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
    let value;
    if(type === 'name'){
      value = input.current.value;
      dispatch(editName({value}));
    }
    if(type === 'specific'){
      value = textarea.current.value;
      dispatch(editSpecific({value}))
    }
    setOpen(false);
  }
  function resetValue(){
    if(type === 'name'){
      dispatch(resetName());
    }
    if(type === 'specific'){
      dispatch(resetSpecific())
    }
    setOpen(false);
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
            ref={input}
          />
        )}
        {type === "specific" && (
          <textarea
            placeholder={placehold}
            className="editModal__textarea"
            ref={textarea}
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
        <Button onClick={editValue}>Add</Button>
        <Button onClick={resetValue}>Reset</Button>
      </div>
    </dialog>
  );
}
