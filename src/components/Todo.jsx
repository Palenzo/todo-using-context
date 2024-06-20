import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Strike(text) {
    return text.split("")
        .map(char => char + '\u0336').join('')
}
function UnStrike(text) {
    return text.split("")
        .map(char => char.normalize("NFD").replace(/[\u0300-\u036f]/g, '')).join('')
}
function HideDeleteButton() {
    return {
        display: 'none'
    }
}
const Todo = (props) => {
    const [todos, setTodos] = useContext(TodoContext);
    const completed = (e) => {

        const filterTodos = todos.map((item) => {
            if (item.id === e.target.value) {
                item.completed = false;
                item.title = UnStrike(item.title);

                if (e.target.checked) {
                    item.completed = true;
                    item.title = Strike(item.title);
                    HideDeleteButton();

                }
            }
            return item;
        });
        setTodos(filterTodos);


    }
    const DeleteTodo = (e) => {

        e.preventDefault();
        const filterTodo = todos.filter((item) => {

            return item.id !== e.target.id;

        })
        setTodos(filterTodo);
        props.setCount(props.count - 1);

    }
    const isCompleted = props.completed ? "completed" : "";
    return (
        <>
            <div className={`todo-item ${isCompleted}`}>
                <input type="checkbox" checked={props.completed} id={props.id} value={props.id} onChange={e => completed(e)} />
                <label htmlFor={props.id}>{props.title}</label>
                {!props.completed && (
                    <button
                        type="button"
                        id={props.id}
                        onClick={DeleteTodo}
                        className="btn-delete"
                    >
                        Delete
                    </button>
                )}

            </div>


        </>
    );
}
export default Todo;