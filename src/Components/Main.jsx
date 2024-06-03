import { useState } from "react";
import Calendar from "./Calendar";
import Tasks from "./Tasks";
import Nav from "./Nav";
import Profile from "./Profile";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("tasks");

  return (
    <main className="main">
      <Nav tab={currentPage} onChange={(current) => setCurrentPage(current)} />
      {currentPage === "tasks" && <Tasks />}
      {currentPage === "calendar" && <Calendar />}
      {currentPage === "profile" && <Profile />}
    </main>
  );
}

//в profile, task, tasks, modal, completedmodal
