import React, { useContext, useRef } from 'react'
import { LaunchContext } from './LaunchContext';
import { useEffect } from 'react';

const LaunchMain = () => {

  const { 
    tasks, 
    setTasks, 
    tasksTodo, 
    tasksDoing, 
    tasksDone, 
    amountTasksTodo, 
    amountTasksDoing, 
    amountTasksDone,
    setTitleTask,
  } = useContext(LaunchContext);

  const deleteTask = (taskIndex) => {
    setTasks((tasks.filter((task, index) => index !== taskIndex)));
    const lastIndex = tasks.length - 2;
    setTitleTask(tasks[lastIndex]?.title === undefined ? 'task name' : tasks[lastIndex].title);
  };

  return (
    <main className='main-content'>
      <section className='tasks-targets-container'>
        <div className='tasks-target-column'>
          <div className='task-target-column-name'>
            <div className='tasks-name-circle-todo'></div>
            <p className='tasks-name-title-todo'>TODO ({amountTasksTodo()})</p>
          </div>
          {tasksTodo.map((task, index) => {
            return (
              <div 
              key={index} 
              className={'task-target'}>
                <div className='task-target-top'>
                  <p className='task-target-title'>{task.title}</p>
                  <span 
                    className="material-symbols-outlined close-target"
                    onClick={() => deleteTask(index)}
                  >close</span>
                </div>
                <div className='task-target-center'>
                  <p className='task-target-description'>{task.description}</p>
                </div>
                <div className='task-target-bottom'>
                  <p className='task-target-subtasks'>
                    <span 
                      className={`span-subtasks ${ task.subtasks === undefined && 'span-subtasks-empty' }`}
                    >subtasks: </span>
                    {task.subtasks} 
                  </p> 
                </div>
              </div>
            ) 
          })}
        </div>
        <div className='tasks-target-column'>
          <div className='task-target-column-name'>
            <div className='tasks-name-circle-doing'></div>
            <p className='tasks-name-title-doing'>DOING ({amountTasksDoing()})</p>
          </div>
          {tasksDoing.map((task, index) => {
            return (
              <div 
              key={index} 
              className={'task-target'}>
                <div className='task-target-top'>
                  <p className='task-target-title'>{task.title}</p>
                  <span 
                    className="material-symbols-outlined close-target"
                    onClick={() => deleteTask(index)}
                  >close</span>
                </div>
                <div className='task-target-center'>
                  <p className='task-target-description'>{task.description}</p>
                </div>
                <div className='task-target-bottom'>
                  <p className='task-target-subtasks'>
                    <span 
                    className={`span-subtasks ${ task.subtasks === undefined && 'span-subtasks-empty' }`}
                    >subtasks: </span> 
                    {task.subtasks}
                  </p> 
                </div>
              </div>
            ) 
          })}
        </div>
        <div className='tasks-target-column'>
          <div className='task-target-column-name'>
            <div className='tasks-name-circle-done'></div>
            <p className='tasks-name-title-done'>DONE ({amountTasksDone()})</p>
          </div>
          {tasksDone.map((task, index) => {
            return (
                <div 
              key={index} 
              className={'task-target'}>
                <div className='task-target-top'>
                  <p className='task-target-title'>{task.title}</p>
                  <span 
                    className="material-symbols-outlined close-target"
                    onClick={() => deleteTask(index)}
                  >close</span>
                </div>
                <div className='task-target-center'>
                  <p className='task-target-description'>{task.description}</p>
                </div>
                <div className='task-target-bottom'>
                  <p className='task-target-subtasks'>
                    <span 
                      className={`span-subtasks ${ task.subtasks === undefined && 'span-subtasks-empty' }`}
                    >subtasks: </span>
                    {task.subtasks} 
                  </p> 
                </div>
              </div>
            ) 
          })}
        </div>
      </section>
    </main>
  )
};

export default LaunchMain;