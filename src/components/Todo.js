import React, {useState} from 'react';
import './Todo.css';


const Todo = (props) => {

    const [checked, setChecked] = useState(props.task.checked);
    console.log(checked);

    const checkedHandler = () => {
        setChecked(!checked);
    };

    return (
        <div className="taskCard">
            <input type="checkbox" className="checkbox" onClick={checkedHandler}/>
            <p className="task-text"
            style={{
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "green" : "black"
            }}
            >{props.task.description}</p>
            <button className="del" onClick={props.delete}>Delete</button>
        </div>)
};

export default Todo;