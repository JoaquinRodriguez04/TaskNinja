import { useEffect, useState } from "react";
import { createContext } from "react";

export const LaunchContext = createContext();

const tasksInitial = JSON.parse(localStorage.getItem('tasks')) || []; 
const taskTitle = localStorage.getItem('titleTask') || 'task name'; 

export const LaunchProvider = ( {children} ) => {

  const [hideSidebar, setHideSidebar] = useState(false);

  const [tasks, setTasks] = useState(tasksInitial);

  const [subtasksList, setSubtasksList] = useState([]);

  const [titleTask, setTitleTask] = useState(taskTitle);

  const amountTasks = () => { 
    return tasks.reduce((acc, task) => acc + task.amount, 0);
  };  

  const tasksTodo = tasks.filter((task) => task.state === 'todo');

  const tasksDoing = tasks.filter((task) => task.state === 'doing');

  const tasksDone = tasks.filter((task) => task.state === 'done');  

  const amountTasksTodo = () => {
    return tasksTodo.reduce((acc, task) => acc + task.amount, 0);
  };  

  const amountTasksDoing = () => {
    return tasksDoing.reduce((acc, task) => acc + task.amount, 0);
  };  

  const amountTasksDone = () => {
    return tasksDone.reduce((acc, task) => acc + task.amount, 0);
  };

  const handleTitleTask = (task) => {
    setTitleTask(task.title);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('titleTask', titleTask);
  }, [tasks]);

  return (
    <LaunchContext.Provider value={{
        amountTasks, 
        tasks, 
        setTasks,
        tasksTodo,
        tasksDoing,
        tasksDone,
        amountTasksTodo,
        amountTasksDoing,
        amountTasksDone,
        hideSidebar,
        setHideSidebar,
        subtasksList,
        setSubtasksList,
        handleTitleTask,
        setTitleTask,
        titleTask
        }}> 
        {children}
    </LaunchContext.Provider>
  )
};