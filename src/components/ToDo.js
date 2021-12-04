import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined }  from '@ant-design/icons';

import '../scss/todo-list.scss';

import { ToDoContext } from '../context/ToDoContext';

const ToDo = ({todo, handleToggle, uniqueKey }) => {
    const { showModal } = useContext(ToDoContext);

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div className="list-items" key={uniqueKey}>
            <div id={todo.id}  key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={`todo ${todo.complete ? 'strike' : ''}`}>
                {todo.task}
            </div>
            <div className="actions">
                <Link to={`/task/${todo.id}`}><EditOutlined className={'edit'} title={"edit"} /> </Link>
                <DeleteOutlined className="delete" onClick={() => showModal(todo.id)} />
            </div>
        </div>
    );
};

export default ToDo;