import React, { useContext } from 'react'
import { LaunchContext } from './LaunchContext';
import LaunchSidebar from '../components/LaunchSidebar';
import LaunchHeader from '../components/LaunchHeader';
import LaunchMain from '../components/LaunchMain';

const AppLaunch = () => {

    const {hideSidebar} = useContext(LaunchContext);

    return (
      <main className={`app-container ${ hideSidebar && 'hide-sidebar' }`}>
          <LaunchSidebar/>
          <LaunchHeader/>
          <LaunchMain/>
      </main>
    )
};

export default AppLaunch;