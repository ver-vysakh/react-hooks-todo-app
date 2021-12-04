import React, { useState } from "react";

const ToDoContext = React.createContext();

const ToDoProvider = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
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
              showModal: showModal,
              handleOk: handleOk,
              handleCancel: handleCancel
          }}>
              {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext };

export default ToDoProvider;