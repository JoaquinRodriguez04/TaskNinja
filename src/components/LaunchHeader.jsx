import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LaunchContext } from './LaunchContext';
import logotype from '../assets/s.png';

const LaunchHeader = () => {

  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const { 
    tasks, 
    setTasks, 
    titleTask, 
    subtasksList, 
    setSubtasksList,
    amountTasks,
    setTitleTask 
  } = useContext(LaunchContext);

  const {register, handleSubmit, reset} = useForm();

  const handleModal = () => {
    setModal(!modal);
  }

  const handleClose = () => {
    setModal(false);
  };

  const handleDrop = () => {
    setDropdown(!dropdown);
  };

  const addNewTask = (data) => {

    setTasks([...tasks, {
      title: data.title, 
      description: data.description, 
      subtasks: data.subtasks,
      amount: 1,
      state: data.state
    }]);

    console.log(tasks);

    reset();
    setModal(false);
    setTitleTask(data.title);
  };

  const handleAddSubtask = (e) => {
    e.preventDefault();
    const subtaskInput = e.currentTarget.previousElementSibling;
    const subtaskValue = subtaskInput.value;

    setSubtasksList([...subtasksList, subtaskValue]);
  };

  const handleDeleteSubtasks = (subtaskIndex) => {
    return setSubtasksList((subtasksList.filter((subtask, index) => index !== subtaskIndex)))
  };

  return (
    <header className='launch-navbar'>
      <div className='launch-drop'>
        <img src={logotype} className='logo-image logo-mobile' alt="logo-app" />
        {<h2>{titleTask}</h2>}
        { dropdown ?
          <span 
          className="material-symbols-outlined arrow-disabeld"
          onClick={handleDrop}>keyboard_arrow_down</span>
            :
          <span 
          className="material-symbols-outlined arrow-disabeld"
          onClick={handleDrop}>keyboard_arrow_up</span>
        }
        {
          dropdown && 
          <div className='tasks-drop-mobile'>
            <p>all tasks ({amountTasks()})</p>
            <div className='tasks-mobile-container'>
              {tasks.map((task, index) => {
                return( 
                  <div className='task-dash' key={index}>
                    <span className="material-symbols-outlined dashboard">team_dashboard</span>
                    <p className='task-dash-title'>{task.title}</p>            
                  </div>
                  )
              })}
            </div>
          </div>
        }
      </div>
        <div className='launch-add-task'>
            <button className='launch-btn-task btn-task-desktop' onClick={handleModal}>+Add New Task</button>
            <button className='launch-btn-task btn-task-mobile' onClick={handleModal}>
              <p className='btn-task-further'>+</p>
            </button>
            <span className="material-symbols-outlined dropdown">more_vert</span>
        </div>
        {modal && (
        <div className='launch-create-task'>
          <div className='launch-actions-task'>
            <h2 className='launch-actions-title-task'>add new task</h2>
            <button onClick={handleClose}>
              <span className="material-symbols-outlined close-launch-form">close</span>
            </button>
          </div>
          <form className='launch-form-task' onSubmit={handleSubmit(addNewTask)}>
            <div className='launch-form-bubble'>
              <label>title</label>
              <input 
              type="text" 
              className='launch-form-input' 
              placeholder='Complete project report'
              {...register('title')}
              />
            </div>
            <div className='launch-form-bubble'>
              <label>description</label>
              <input 
              type="text" 
              className='launch-form-input' 
              placeholder='Write the final project report and send it before Friday.'
              {...register('description')}
              />
            </div>
            <div className='launch-form-bubble'>
              <label>substasks</label>
              {subtasksList.map((subtask, index) => {
                return (
                  <div 
                  key={index}  
                  className='launch-form-subtasks-bubble'>
                    <input 
                      type="text" 
                      className='launch-form-input input-subtasks' 
                      placeholder='e.g. drink coffe'
                    />
                    <span 
                    className="material-symbols-outlined close-launch-form"
                    onClick={() => handleDeleteSubtasks(index)}>close</span>
                  </div>
                )
              })}
              <input 
                type="text" 
                className='launch-form-input input-subtasks' 
                placeholder='e.g. drink coffe'
                {...register('subtasks')}
              />
              <button 
                className='launch-form-btn btn-subtasks'
                onClick={handleAddSubtask}>
                add new subtask
              </button>
            </div>
            <div className='launch-form-bubble'>
              <label>status</label>
              <select 
              className='launch-form-input' 
              {...register('state')}>
                <option value={'todo'}>todo</option>
                <option value={'doing'}>doing</option>
                <option value={'done'}>done</option>
              </select>
            </div>
            <button className='launch-form-btn'>add new task</button>
          </form>
        </div>
        )}
    </header>
  )
};

export default LaunchHeader;