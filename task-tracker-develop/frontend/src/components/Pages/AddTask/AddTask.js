import React, {useState} from 'react';
import {addTask} from "../../../asyncActions/addTask";
import "./AddTask.css"
import {useNavigate} from "react-router-dom";

const AddTask = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();
    const [date, setDate] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const id = Date.now()
        await addTask({
            id,
            name,
            description,
            status,
            date,
        });
        navigate("/todos")
    }

    return (
        <div className="add_task_wrapper">
            <h1>Add task</h1>
            <form className={"form_wrapper"} onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input type="name" onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    <p>Description:</p>
                    <input type="description" onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>
                    <p>Status:</p>
                    <input type="status" onChange={e => setStatus(e.target.value)}/>
                </label>
                <label>
                    <p>Date:</p>
                    <input type="date" onChange={e => setDate(e.target.value)}/>
                </label>
                <div>
                    <button className={"sub_button"} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;