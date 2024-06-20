import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import './App.css';
function App(props) {
  const [count,setCount] = useState(0);

  return (
    <TodoProvider>
      <div className="container">
        <h1 className="app-title">Todo Application</h1>
        <p> Count : {count}</p>
        <AddTodo count = {count} setCount = {setCount} />
        <TodoList  count = {count} setCount = {setCount}/>
      </div>
    </TodoProvider>

  );
}

export default App;
