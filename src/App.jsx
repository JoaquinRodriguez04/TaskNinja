import './App.css'
import { LaunchProvider } from './components/LaunchContext';
import AppLaunch from './components/AppLaunch';

function App() {

  return (
    <LaunchProvider>
      <AppLaunch/>
    </LaunchProvider>
  )
};

export default App;