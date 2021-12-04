import React, { useState } from "react";
//mock data
import data from "../data.json";
const ToDoContext = React.createContext();

const ToDoProvider = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskDeleteId, setTaskDeleteId] = useState(null);
    const [toDoList, setToDoList] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(toDoList.length+1);

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
        { id: currentIndex, task: userInput, complete: false },
      ];
      setToDoList(copy);
      setCurrentIndex(currentIndex+1);
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

    const showModal = (id) => {
      setTaskDeleteId(id)
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <ToDoContext.Provider
          value={{
              isModalVisible: isModalVisible,
              toDoList: toDoList,
              taskDeleteId: taskDeleteId,
              showModal: showModal,
              handleOk: handleOk,
              handleCancel: handleCancel,
              handleToggle: handleToggle,
              handleFilter: handleFilter,
              addTask: addTask,
              getTask: getTask,
              updateTask: updateTask,
              deleteTask: deleteTask
          }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext };

export default ToDoProvider;