import React from 'react';

import './scss/todo-list.css' 

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={`todo ${todo.complete ? 'strike' : ''}`}>
            {todo.task}
        </div>
    );
};

export default ToDo;