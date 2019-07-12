import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(item => item.active);
  const done = props.tasks.filter(item => !item.active);

  // done.sort((a, b) => b.finishDate - a.finishDate);
  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className='active'>
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>żadnych zadań do zrobienia</p>
        )}
      </div>
      <hr />
      <div className='done'>
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {doneTasks.length > 4 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlonych jest tylko 5 ostatnich zrobionych zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
