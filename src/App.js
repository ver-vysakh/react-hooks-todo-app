import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  const getTask = (id) => {
    return toDoList.find(task => task.id === Number(id));
  }

  const updateTask = (id, userInput) => {
      let mapped = toDoList.map((task) => {
        return task.id === Number(id)
          ? { ...task, task: userInput, complete: false }
          : { ...task };
      });
      setToDoList(mapped);
  };

  const deleteTask = (id) => {
    let remainingTask = toDoList.filter(task => task.id !== id);
    debugger
    setToDoList(remainingTask);
  }

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/task/:handle">
            <ToDoForm addTask={addTask} getTask={getTask} updateTask={updateTask} />
          </Route>
          <Route path="/task">
            <ToDoForm addTask={addTask} />
          </Route>
          <Route path="/">
            <ToDoList
              toDoList={toDoList}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              deleteTask={deleteTask}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
