import {useContext} from "react";
import {TasksContext} from "../Context";

export const Desk = () => {
    const value = useContext(TasksContext)
    const string = value.tasks.map((elem) =>
        <li key={elem.id}>{elem.name} - {elem.text}</li>
    );
    return(
        <div>
            <ul>
                {string}
            </ul>
        </div>
    );
}