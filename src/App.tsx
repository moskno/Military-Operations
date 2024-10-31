import React from 'react';
import MissionForm from './components/MissionForm';
import MissionList from './components/MissionList';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Military Operations Dashboard</h1>
      <MissionForm />
      <MissionList />
    </div>
  )
}

export default App