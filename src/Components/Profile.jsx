import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart, ArcElement, DoughnutController } from "chart.js";
import Button from "./Button/Button";
import CompletedModal from "./ProfileModals/CompletedModal";
import EditModal from "./ProfileModals/EditModal";
import profLogo from "./../images/profile-logo.jpeg";
import editSVG from './../images/icons/pencil-edit-02-stroke-rounded.svg'
import editSVGWh from './../images/icons/pencil-white.svg'

Chart.register(DoughnutController, ArcElement);
let chart;

export default function Profile() {
  const completedTasksArr = useSelector((state) => state.todos.complTodos);
  const profileName = useSelector((state) => state.edits.nameState);
  const profileSpec = useSelector((state) => state.edits.specifState);

  const [openedCompleted, setOpenedCompleted] = useState(false);
  const [openedEditName, setOpenedEditName] = useState(false);
  const [openedEditSpec, setOpenedEditSpec] = useState(false);

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
            data: [
              completedTasksArr.length,
              5 > completedTasksArr.length ? 5 - completedTasksArr.length : 0,
            ],
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
            <div className="profile__logo-nickname">
              {profileName}
              <Button onClick={(cur) => setOpenedEditName(cur)}><img src={editSVG} alt='edit'/></Button>
            </div>
          </div>
          <div className="profile__specific">
            <h2 className="profile__specific-title profile__title">
              Specifications
            </h2>
            <div className="profile__specific-textBlock">
              <p className="profile__specific-text">
                {profileSpec}
              </p>
              <Button onClick={(cur) => setOpenedEditSpec(cur)}><img src={editSVGWh} alt='edit'/></Button>
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
      <EditModal
        open={openedEditName}
        setOpen={(cur) => setOpenedEditName(cur)}
        type={"name"}
      />
      <EditModal
        open={openedEditSpec}
        setOpen={(cur) => setOpenedEditSpec(cur)}
        type={"specific"}
      />
    </section>
  );
}
