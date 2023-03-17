import React, {useEffect} from 'react';
import "./Todo.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchTodos} from "../../../asyncActions/getTodos";
import {deleteTask} from "../../../asyncActions/deleteTask";

const Todo = () => {
    const { id } = useParams();
    let todos = useSelector(store => store.todos)
    todos = todos.filter(x => x.id == id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch, id])

    const navigate = useNavigate();

    return (
        <div className={"todo_page"}>
            {todos.map(elem =>
                <div className={"todo_wrapper"} key={elem.id}>
                    <div className={"small_el_wrapper"}>
                        <p>{elem.name}</p>
                    </div>
                    <div className={"big_el_wrapper"}>
                        <p>{elem.description}</p>
                    </div>
                    <div className={"small_el_wrapper"}>
                        <span>Status:</span>
                        <p>{elem.status}</p>
                    </div>
                    <div className={"small_el_wrapper"}>
                        <span>Date:</span>
                        <p>{elem.date}</p>
                    </div>
                </div>
            )}
            <div className={"todo_manipulation"}>
                <div id={"edit_wrapper"}>
                    <a href={`/todos/change/${id}`}>Edit task</a>
                </div>
                <button onClick={() => {deleteTask(id).then(() => navigate("/todos"))}}>Delete Task</button>
            </div>
        </div>
    );
};

export default Todo;