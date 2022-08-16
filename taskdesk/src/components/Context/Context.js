import { createContext, useContext, useMemo, useState } from 'react';

export const TasksContext = createContext(null);

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const value = { addTask(task) {setTasks((prevState) => [...prevState, { ...task, id: prevState.length + 1 },])},
                    tasks};
    return (<TasksContext.Provider value={value}>{children}</TasksContext.Provider>);
};

TasksContext.displayName = 'TasksContext';

// const value = useMemo(() => ({tasks,
//         addTask(task) {setTasks((prevState) => [...prevState, { ...task, id: prevState.length + 1 },]);},
//         updateTask(taskId, task) {setTasks((prevState) => prevState.map((prevTask) => {if (prevTask.id === taskId) return { ...prevTask, ...task };return prevTask;}),);},
//         deleteTask(taskId) {setTasks((prevState) => prevState.filter(({ id }) => id !== taskId));},
//     }), [tasks],);