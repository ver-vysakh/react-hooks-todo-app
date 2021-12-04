import React from 'react';
import ToDo from './ToDo';

import { Link } from 'react-router-dom';
import { Button } from 'antd';

const ToDoList = ({toDoList, handleToggle, handleFilter, deleteTask}) => {
    return (
        <div className={'list'}>
            {toDoList.map((todo, index) => {
                return (
                    <React.Fragment key={index}>
                        <ToDo uniqueKey={`todo-${index}`} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} deleteTask={deleteTask} />
                    </React.Fragment>
                )
            })}
            <div className="list-items">
                <Button className="btn" type={"danger"} onClick={handleFilter}>Clear Completed</Button>
                <Link to={`/task`} key={1} > <Button className="btn" type={"primary"}>Add New Task</Button> </Link>
            </div>
        </div>
    );
};

export default ToDoList;