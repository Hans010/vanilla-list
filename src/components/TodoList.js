import React, {useState, useEffect} from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";
// import classes from './todoList.css';

const LOCAL_STORAGE_KEY = 'vanilla-task-list';

const TodoList = (props) => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
       const listFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
       if (listFromLocalStorage) setTodoList(listFromLocalStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
    }, [todoList]);

    const add2ListHandler = (task) => {
        // if ()
        setTodoList([...todoList, task]);
    };

    const removeTaskFromListHandler = (id) => {
        setTodoList(todoList.filter(task => {
            return task.id !== id;
        }))
    }

    const list = todoList.map(task => {
        return <Todo key={task.id} task={task} delete={() => removeTaskFromListHandler(task.id)}/>
    });

    return (
        <div style={{width: "100%"}}>
            <AddTodo add2List={add2ListHandler}/>
            <div className="todo-list">
                {list}
            </div>
        </div>
    );
}

export default TodoList;