import CalendarItem from "./CalendarItem/CalendarItem.jsx";
import { calendar } from "./../calendar/calendar.js";

export default function Calendar() {
  let currentMonth;
  switch (new Date().getMonth()) {
    case 0:
      currentMonth = calendar.january;
      break;
    case 1:
      currentMonth = calendar.feburary;
      break;
    case 2:
      currentMonth = calendar.march;
      break;
    case 3:
      currentMonth = calendar.april;
      break;
    case 4:
      currentMonth = calendar.may;
      break;
    case 5:
      currentMonth = calendar.june;
      break;
    case 6:
      currentMonth = calendar.july;
      break;
    case 7:
      currentMonth = calendar.august;
      break;
    case 8:
      currentMonth = calendar.september;
      break;
    case 9:
      currentMonth = calendar.october;
      break;
    case 10:
      currentMonth = calendar.november;
      break;
    case 11:
      currentMonth = calendar.december;
      break;
  }
  return (
    <section className="calendar">
      <div className="calendar__inner">
        <h1 className="calendar__title">Calendar of your tasks</h1>
        <div className="calendar__list">
          {currentMonth.map((el) => (
            <CalendarItem key={el} date={el}>{el}</CalendarItem>
          ))}
        </div>
      </div>
    </section>
  );
}
