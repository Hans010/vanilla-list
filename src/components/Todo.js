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
            <div className="taskWrapper">
                <input type="checkbox" className="checkbox" onClick={checkedHandler}/>
                <p className="task-text"
                   style={{
                       textDecoration: checked ? "line-through" : "none",
                       color: checked ? "green" : "black"
                   }}
                >{props.task.description}</p>
            </div>
            <button className="del" onClick={props.delete}><i className="fas fa-trash"></i></button>
        </div>)
};

export default Todo;