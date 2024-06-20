import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoList = (props) => {
    const [todos] = useContext(TodoContext);

    return(
        
        1 <= todos.length ? todos.map((item)=>{
            return(
                <>
                <Todo key ={item.id} id = {item.id} title = {item.title} completed = {item.completed} count = {props.count} setCount = {props.setCount} />
                
                </>
                
            );
        }): (<h4>No todo found. Please add some...</h4>)
    )
};
export default TodoList;