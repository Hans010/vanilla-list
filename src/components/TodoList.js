import React, {useState} from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";
// import classes from './todoList.css';

const TodoList = (props) => {

    const [todoList, setTodoList] = useState([]);

    const add2ListHandler = (task) => {
        setTodoList([...todoList, task]);
    };

    const removeTaskFromListHandler = (id) => {
        setTodoList(todoList.filter(task => {
            return task.id !== id;
        }))
    }

    const list = todoList.map(task => {
       return  <Todo key={task.id} task={task} delete={() => removeTaskFromListHandler(task.id)}/>
    })

    return (
        <div style={{width: "100%"}}>
            <AddTodo add2List={add2ListHandler}/>
            {list}
        </div>
    );
}

export default TodoList;