import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined }  from '@ant-design/icons';

import './scss/todo-list.css';

import { ToDoContext } from '../src/context/ToDoContext';

const ToDo = ({todo, handleToggle, uniqueKey, deleteTask}) => {
    const { isModalVisible, handleOk, handleCancel, showModal } = useContext(ToDoContext);

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    const onDelete = (id) => {
        deleteTask(id);
        handleOk()
    }

    const iconStyle = { fontSize: '16px', color: 'red', marginRight: '10px' };

    return (
        <div className="list-items" key={uniqueKey}>
            <div id={todo.id}  key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={`todo ${todo.complete ? 'strike' : ''}`}>
                {todo.task}
            </div>
            <div className="actions">
                <Link to={`/task/${todo.id}`}><EditOutlined className={'edit'} title={"edit"} /> </Link>
                <DeleteOutlined className="delete" onClick={showModal} />
            </div>
            <Modal visible={isModalVisible} onOk={() => onDelete(todo.id)} onCancel={handleCancel}>
                <ExclamationCircleOutlined style={iconStyle}/>
                <span>Do you want to delete these items?</span>
            </Modal>
        </div>
    );
};

export default ToDo;