import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import {v4 as uuidv4 } from 'uuid';

const AddTodo=(props)=> {
    const [title, setTitle] = useState("");  
    const [todos, setTodos] = useContext(TodoContext);
    
    const addTodo = (e) => {
        e.preventDefault();
        if ( ''===title||undefined===title){
            alert("Field can't be Empty");
            return;
        }
        const newTodos = [...todos, {id :uuidv4() , title:title,completed:false}];
        setTodos(newTodos);
        setTitle("");
        props.setCount(props.count+1);
        
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
    return (
        <>
         <div className = "form-input-container">
            <input value={title} className="form-input" onChange ={e=>setTitle(e.target.value)} placeholder="Add Todo..."/>
            <button type="button" className="form-button" onClick={ addTodo }>Add</button>
         </div>
        </>
    )
}
export default AddTodo;
