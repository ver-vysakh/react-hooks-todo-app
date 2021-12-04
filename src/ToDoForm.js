import React, { useState, useEffect, useContext } from 'react';
import { Input, Button, message } from 'antd';
import { useParams, useHistory } from 'react-router-dom'

import './scss/form.css';
import { ToDoContext } from '../src/context/ToDoContext';

const ToDoForm = () => {
    const { addTask, getTask, updateTask } = useContext(ToDoContext);
    const [ userInput, setUserInput ] = useState('');
    const { handle } = useParams();
    let history = useHistory();

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    useEffect(() => {
        if(handle){
            let task = getTask(handle);
            setUserInput(task.task);
        }
    }, [handle])

    const addNewTask = () => {
        addTask(userInput);
        reset();
    }

    const editTask = () => {
        updateTask(handle, userInput);
        reset();
    }

    const reset = () => {
        setUserInput("");
        history.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!userInput){
            handle ?  editTask() : addNewTask();
            return
        }
        error()
    }

    const error = () => {
        message.error('Task should not be empty');
    };

    return (
        <div className="form-wrap">
            <form onSubmit={handleSubmit}>
                <Input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
                <Button type="primary" className="btn" onClick={handleSubmit}>Submit</Button>
            </form>
        </div>

    );
};

export default ToDoForm;