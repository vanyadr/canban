import {useContext, useState} from "react";
import {TasksContext} from "../Context";
import {useNavigate} from "react-router-dom";

export const TaskAdd = () => {
    const [task, setTask] = useState({name: '', task: ''});
    const value = useContext(TasksContext);
    const navigate = useNavigate()
    const handleChange = (event) => {
        const {name, value} = event.target
        setTask(prevState => ({...prevState, [name]: value}))
    };
    const onSubmit = (event) => {
        event.preventDefault();
        value.addTask(task);
        navigate("/board");
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Task Name:
                    <input
                        name="name"
                        type="text"
                        value={task.name}
                        onChange={handleChange} />
                </label>
                <label>
                    Task Text
                    <input
                        name="text"
                        type="text"
                        value={task.text}
                        onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}