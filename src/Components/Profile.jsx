import { useEffect, useState } from "react";
import profLogo from "./../images/profile-logo.jpeg";
import Button from "./Button/Button";
import { Chart, ArcElement, DoughnutController } from "chart.js";
import CompletedModal from "./ProfileModals/CompletedModal";
import { useSelector } from "react-redux";

Chart.register(DoughnutController, ArcElement);
let chart;

export default function Profile() {
  const completedTasksArr = useSelector(state => state.todos.complTodos)

  const [openedCompleted, setOpenedCompleted] = useState(false);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [completedTasksArr.length, 5 > completedTasksArr.length ? 5 - completedTasksArr.length : 0],
            backgroundColor: [
              "rgba(166, 207, 99, 0.8)",
              "rgba(54, 162, 235, 0.8)",
            ],
            borderColor: ["rgba(166, 207, 99, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 2,
          },
        ],
      },
    });
  });

  function openCompleteModal() {
    setOpenedCompleted(true);
  }

  return (
    <section className="profile">
      <div className="profile__inner">
        <div className="profile__desc">
          <div className="profile__logo">
            <h2 className="profile__logo-title profile__title">Logo</h2>
            <div className="profile__logo-border">
              <img src={profLogo} alt="" className="profile__logo-img" />
            </div>
            <div className="profile__logo-nickname">Deckstery</div>
          </div>
          <div className="profile__specific">
            <h2 className="profile__specific-title profile__title">
              Specifications
            </h2>
            <div className="profile__specific-textBlock">
              <p className="profile__specific-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                excepturi vero autem consectetur itaque dignissimos aliquid
                quas. Cum, enim necessitatibus! Quidem distinctio magni cum,
                debitis repellat blanditiis vero earum ratione!
              </p>
            </div>
          </div>
        </div>
        <div className="profile__divider"></div>
        <div className="profile__settings">
          <div className="profile__statics">
            <h2 className="profile__statics-title profile__title">
              Statistics
            </h2>
            <Button onClick={openCompleteModal}>
              Completed Tasks: {completedTasksArr.length}
            </Button>
            <Button>Planned Tasks</Button>
            <Button>Tasks Settings</Button>
          </div>
          <div className="profile__analitics">
            <h2 className="profile__analitics-title profile__title">
              Analitics
            </h2>
            <div className="profile__analitics-circle">
              <canvas id="myChart" width="150" height="150"></canvas>
              <div className="profile__analitics-descr">
                <div className="profile__analitics-completed">
                  <div
                    className="profile__analitics-completedBlock profile__analitics-Block"
                    style={{ backgroundColor: "rgba(166, 207, 99, 1)" }}
                  ></div>
                  <p>Completed</p>
                </div>
                <div className="profile__analitics-uncompleted">
                  <div
                    className="profile__analitics-uncompletedBlock profile__analitics-Block"
                    style={{ backgroundColor: "rgba(54, 162, 235, 0.8)" }}
                  ></div>
                  <p>Uncompleted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompletedModal
        open={openedCompleted}
        setOpen={(cur) => setOpenedCompleted(cur)}
      />
    </section>
  );
}
