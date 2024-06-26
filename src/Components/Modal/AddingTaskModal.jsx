import Button from "../Button/Button";
import "./Modal.css";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { addDate } from "../../store/dateSlice";

export default function Modal({ open, setOpen, hasTasks }) {
  const dialog = useRef();
  const title = useRef();
  const desc = useRef();
  const sel = useRef();
  const date = useRef();
  const dispatch = useDispatch();

  // Значения полей ввода - перменные
  let valTitle;
  let valDesc;
  let valSel;
  let valDate;

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // отменить задачу
  function cancelTask(e) {
    e.preventDefault();

    dialog.current.close();
    setOpen(false);

    // сбросить значения полей ввода
    title.current.value = "";
    desc.current.value = "";
    date.current.value = '';
  }
  // добавить задачу
  function addTask(e) {
    e.preventDefault();

    valTitle = title.current.value;
    valDesc = desc.current.value;
    valSel = sel.current.value;
    valDate = Number(date.current.value.slice(-2));

    // если строка с названием задачи заполнена, то добавляем в массив объект с названнием и описанием задачи
    if (valTitle != "" && valDate != '') {
      dispatch(
        addTodo({
          title: valTitle,
          desc: valDesc,
          sel: valSel,
          date: valDate,
        })
      );
      dispatch(addDate({
        date: valDate,
        title: valTitle,
        desc: valDesc,
      }))

      hasTasks("isTasks");
      dialog.current.close();
      setOpen(false);
    }
    // сбросить значения полей ввода
    title.current.value = "";
    desc.current.value = "";
    sel.current.value = '4';
    date.current.value = '';
  }
  return (
    <dialog className="modalDialog" ref={dialog}>
      <form action="" className="modalForm">
        <label htmlFor="modalForm_tasktitle" className="modalForm_label">
          Enter a title
        </label>
        <input
          id="modalForm_tasktitle"
          type="text"
          className="modalForm_tasktitle modalInput"
          placeholder="New task"
          ref={title}
        />
        <label htmlFor="modalForm_taskdesc" className="modalForm_label">
          Enter a description
        </label>
        <input
          id="modalForm_taskdesc"
          type="text"
          className="modalForm_taskdesc modalInput"
          placeholder="Description"
          ref={desc}
        />
        <select className="priority_select" ref={sel}>
          <option value="1">First priority</option>
          <option value="2">Second priority</option>
          <option value="3">Third priority</option>
          <option value="4" selected>None priority</option>
        </select>

        <input type="date" className="modalInput" ref={date}/>

        <div className="active_buttons">
          <Button onClick={(event) => addTask(event)}>Add</Button>
          <div className="cancel_button">
            <Button onClick={(event) => cancelTask(event)}>Cancel</Button>
          </div>
        </div>
      </form>
    </dialog>
  );
}
