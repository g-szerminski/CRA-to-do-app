import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Srati tati",
        date: "2020-07-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Srutututu",
        date: "2020-08-01",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete elementu " + id);
  };

  changeTaskStatus = id => {
    console.log("change elementu " + id);
  };

  render() {
    return (
      <div className='App'>
        ToDo lista
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
