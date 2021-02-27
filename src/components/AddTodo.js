import React, {useState} from 'react';
import './AddTodo.css';

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
        console.log(task);
        props.add2List(task);
        setTask({
            id: new Date(),
            description: "",
            checked: false
        })
    }

    return (
        <form onSubmit={submitTask.bind(this)}>
            <label htmlFor="task">Enter new task</label>
            <br/>
            <input type="text" name="task" value={task.description} onChange={changeValueHandler.bind(this)}/>
            <button type="submit">Add task</button>
        </form>
    );
}

export default AddTodo;