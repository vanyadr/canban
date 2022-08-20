import {useContext} from "react";
import {TasksContext} from "../Context";

export const Desk = () => {
    const value = useContext(TasksContext)
    const listitems = value.tasks.map((elem) =>
        <li key={elem.id}>{elem.name} - {elem.text}</li>
    );
    return(
        <div>
            <ul>
                {listitems}
            </ul>
        </div>
    );
}