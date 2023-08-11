import React, { useContext, useState } from 'react'
import logotype from '../assets/s.png';
import { LaunchContext } from './LaunchContext';

const SidebarLaunch = () => {

  const { 
    tasks, 
    amountTasks, 
    hideSidebar, 
    setHideSidebar,
    handleTitleTask 
  } = useContext(LaunchContext);

  const handleHideSidebar = () => {
    setHideSidebar(!hideSidebar);
  }

  return (
    <aside className='sidebar-container'>
      <div className='sidebar-top-wrapper'>
        <div className="logo-container">
            <img src={logotype} className='logo-image' alt="logo-app" />
            { hideSidebar === false && <h2 className='logo-text'>TaskNinja</h2>}
        </div>
        <div className='set-task-wrapper'>
          { hideSidebar ? 
            <span class="material-symbols-outlined dataset-icon">assignment</span> 
          : 
            <p>all tasks ({amountTasks()})</p>
          }
        </div>
        <div className='tasks-container'>
          {tasks.map((task, index) => {
            return( 
              <div 
              className='task-dash' 
              key={index}
              onClick={() => {handleTitleTask(task)}}>
                { hideSidebar ?     
                  <p className='hide-title'>{task.title}</p>            
                :
                  <>
                    <span className="material-symbols-outlined dashboard">team_dashboard</span>
                    <p className='task-dash-title'>{task.title}</p>            
                  </>
                }
              </div>
              )
          })}
        </div>
      </div>
      <div className='sidebar-bottom-wrapper'>    
        { hideSidebar ? <button className='btn-hide-sidebar' onClick={handleHideSidebar}> 
                          <span className="material-symbols-outlined">visibility</span>
                        </button> 
                      :
                        <button className='btn-hide-sidebar' onClick={handleHideSidebar}> 
                          <span className="material-symbols-outlined hide-icon">visibility_off</span> 
                          Hide Sidebar
                        </button> 
        }
      </div>
    </aside>
  )
};

export default SidebarLaunch;