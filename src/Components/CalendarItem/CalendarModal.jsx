import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CalendarTask from "./CalendarTask";
import "./calendar.css";
import closeSvg from "./../../images/icons/cancel.svg";

export default function CalendarModal({ open, setOpen, date }) {
  const dateTasks = useSelector((state) => state.dates.dateTasks);
  let currentTasks = [];
  dateTasks.map((el) => {
    if (el.date === date) currentTasks.push(el);
  });

  return (
    <dialog open={open} className="calendar__modal">
      <h2>Planned Tasks</h2>
      <ul className="calendarModal__list">
        {currentTasks.map((el) => (
          <CalendarTask key={el.task.title}>
            <h2>Title: {el.task.title}</h2>
            <p>Decription: {el.task.desc}</p>
          </CalendarTask>
        ))}
      </ul>
      <Button onClick={() => setOpen(false)}>
        <img src={closeSvg}></img>
      </Button>
    </dialog>
  );
}
