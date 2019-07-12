import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "00000000000000000000000000000",
        date: "2020-07-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "111111111111111111111111",
        date: "2020-08-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "22222222222222222222222222",
        date: "2020-08-01",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "333333333333333333333333",
        date: "2020-08-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "44444444444444444444444",
        date: "2020-08-01",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "15 15 15 15 15 15 15 15",
        date: "2020-08-01",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete elementu " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(item => item.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(item => item.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change elementu " + id);
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(item => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    console.log("dodany task");
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;
    console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className='App'>
        <h1>TO DO LIST</h1>
        <AddTask add={this.addTask} />
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
