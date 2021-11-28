import React, { useState } from "react";
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

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/task/:handle">
            <ToDoForm addTask={addTask} />
          </Route>
          <Route path="/">
            <ToDoList
              toDoList={toDoList}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
