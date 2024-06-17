import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button/Button";
import Task from "./Task/Task";
import Modal from "./Modal/AddingTaskModal";

export default function Tasks() {
  const [hasTasks, setHasTasks] = useState("isTasks");
  const [openedModal, setOpenModal] = useState(false);
  const [sortedTodos, setSortedTodos] = useState([]);

  const todosArr = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (todosArr.length == 0) {
      setHasTasks("noTasks");
    } else {
      const sortedArray = [...todosArr].sort((a, b) => a.sel - b.sel).filter(el => el.date === Number(new Date().getDate()));
      setSortedTodos(sortedArray);
    }
  }, [todosArr]);

  function openModal() {
    setOpenModal(true);
  }

  return (
    <section className="tasks">
      {/* нет задач - текст информирующий об этом */}
      {hasTasks === "noTasks" && (
        <p className="no_tasks">There are no tasks.</p>
      )}

      {/* если есть задачи, то они должны выводиться на экран */}
      <div className="task__list">
        {hasTasks === "isTasks" &&
          sortedTodos.map((el) => (
            <Task
              key={el.id}
              title={el.title}
              desc={el.desc}
              priority={el.sel}
              date={el.date}
              id={el.id}
            />
          ))}
      </div>

      <div className="tasks_button">
        <Button
          onClick={() => {
            openModal();
          }}
        >
          Add Task
        </Button>
      </div>

      <Modal
        open={openedModal}
        setOpen={(cur) => setOpenModal(cur)}
        hasTasks={(cur) => setHasTasks(cur)}
      />
    </section>
  );
}
