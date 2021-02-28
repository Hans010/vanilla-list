import './App.css';
import TodoList from "./components/TodoList";

function App() {

    return (
        <div className="App">
            <h1>Todo Love</h1>
            <header className="App-header">
                <TodoList/>
            </header>
        </div>
    );
}

export default App;
