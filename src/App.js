import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Modal } from 'antd';
import { ExclamationCircleOutlined }  from '@ant-design/icons';

import { ToDoContext } from '../src/context/ToDoContext';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const { isModalVisible, handleOk, handleCancel, deleteTask, taskDeleteId } = useContext(ToDoContext);

  const iconStyle = { fontSize: '16px', color: 'red', marginRight: '10px' };

  const onDelete = (id) => {
    deleteTask(id);
    handleOk()
}
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/task/:handle">
            <ToDoForm/>
          </Route>
          <Route path="/task">
            <ToDoForm/>
          </Route>
          <Route path="/">
            <ToDoList/>
          </Route>
        </Switch>
      </Router>
      <Modal visible={isModalVisible} onOk={() => onDelete(taskDeleteId)} onCancel={handleCancel}>
          <ExclamationCircleOutlined style={iconStyle}/>
          <span>Do you want to delete these items?</span>
      </Modal>
    </div>
  );
}

export default App;
