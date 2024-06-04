import { useEffect, useRef } from "react";
import './ProfileModal.css';

export default function CompletedTasks({title, desc, priority}) {
  const task = useRef();
  useEffect(() => {
    switch (priority) {
      case "none":
				task.current.style.border = "5px solid grey";
        break;
      case "first":
				task.current.style.border = "5px solid #db4f4b";
        break;
      case "second":
				task.current.style.border = "5px solid #e99629";
        break;
      case "third":
				task.current.style.border = "5px solid #4bb2d1";
        break;
    }
  });

  return (
    <div className="completedTask" ref={task}>
      <h4 className="completedTask-title">{title}</h4>
      <p className="completedTask-text">{desc}</p>
    </div>
  );
}
