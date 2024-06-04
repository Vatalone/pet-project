import "./Task.css";
import confirmSVG from "./../../images/icons/confirm.svg";
import cancelSVG from "./../../images/icons/cancel.svg";
import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { removeTodo, addCompletedTodo } from "../../store/todoSlice";

export default function Task({ title, desc, priority, id }) {
  const confirm = useRef();
  const deleting = useRef();
  const prioriteLine = useRef();

  const dispatch = useDispatch();

  let stringPriority = '';

  useEffect(() => {
    switch (priority) {
      case "4":
        prioriteLine.current.style.backgroundColor = "grey";
        stringPriority = 'none'
        break;
      case "1":
        prioriteLine.current.style.backgroundColor = "#db4f4b";
        stringPriority = 'first'
        break;
      case "2":
        prioriteLine.current.style.backgroundColor = "#e99629";
        stringPriority = 'second'
        break;
      case "3":
        prioriteLine.current.style.backgroundColor = "#4bb2d1";
        stringPriority = 'third'
        break;
    }
  });

  function confirmTask() {
    dispatch(addCompletedTodo({
      title: title,
      priority: stringPriority,
      id: Math.random(),
    }))
    dispatch(removeTodo({id}));
  }
  function deleteTask() {
    dispatch(removeTodo({id}));
  }

  return (
    <div
      className="task"
      onMouseOver={() => {
        // при наведении на поле объекта добавляются на экран
        confirm.current.style.display = "block";
        deleting.current.style.display = "block";
      }}
      onMouseOut={() => {
        // при выходе из поля объекта удаляются с экрана
        confirm.current.style.display = "none";
        deleting.current.style.display = "none";
      }}
    >
      <div className="prioritise_line" ref={prioriteLine}></div>
      <div className="task_info">
        <h4 className="task_name">{title}</h4>
        <p className="task_desc">{desc}</p>
      </div>
      <div className="confirm_buttonDiv">
        <Button onClick={confirmTask}>
          <img
            className="confirm_button task_btns"
            src={confirmSVG}
            alt=""
            ref={confirm}
          />
        </Button>
      </div>
      <div className="deleting_buttonDiv">
        <Button onClick={deleteTask}>
          <img
            className="deleting_button task_btns"
            src={cancelSVG}
            alt=""
            ref={deleting}
          />
        </Button>
      </div>
    </div>
  );
}
