import React from 'react';
import ToDo from './ToDo';

import { Link } from 'react-router-dom';
import { Button } from 'antd';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className={'list'}>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button type={"danger"} style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</Button>
            <Button type={"default"} style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</Button>
            <Button type={"primary"} style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</Button>
            <Link to={`/task/${1}`} key={1} > Link </Link>
        </div>
    );
};

export default ToDoList;