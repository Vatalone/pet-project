import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CalendarModal from "./CalendarModal";
import "./calendar.css";
export default function CalendarItem({ children, date }) {
  const [open, setOpen] = useState(false);
  const dates = useSelector((state) => state.dates.dates);

  const item = useRef();

  useEffect(() => {
    if (dates.includes(date)) {
      item.current.style.border = "2px solid #fff";
    }
  }, []);
  return (
    <>
      <div className="calendar__list-item" ref={item}>
        {children}
        <Button onClick={() => setOpen(true)}></Button>
      </div>
      <CalendarModal
        open={open}
        setOpen={(cur) => setOpen(cur)}
        date={date}
      ></CalendarModal>
    </>
  );
}
