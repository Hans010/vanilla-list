import React, {useState} from 'react';
import './AddTodo.css';
import {v4 as uuid} from 'uuid';

const AddTodo = (props) => {

    const [task, setTask] = useState({
        id: new Date(),
        description: "",
        checked: false
    });

    const changeValueHandler = (event) => {
        setTask({
            ...task,
            description: event.target.value
        });
    }

    const submitTask = (event) => {
        event.preventDefault();
        if (task.description.trim()) {
            console.log(task);
            props.add2List(task);
            setTask({
                id: uuid(),
                description: "",
                checked: false
            });
        }
    }

    return (
        <form onSubmit={submitTask.bind(this)}>
            <label htmlFor="task">Enter new task</label>
            <br/>
            <input className="task-field" type="text" name="task" value={task.description} onChange={changeValueHandler.bind(this)}/>
            <button className="add-button" type="submit">Add task</button>
        </form>
    );
}

export default AddTodo;