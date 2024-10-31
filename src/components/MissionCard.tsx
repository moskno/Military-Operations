import React from 'react';
import { Mission } from '../types/MissionTypes';

interface MissionCardProps{
    mission: Mission;
}
const MissionCard: React.FC<MissionCardProps> = ({mission}) => {
  return (
    <div style={{ backgroundColor: mission.status === 'Pending' ? 'red' : mission.status === 'In Progress' ? 'orange' : 'green', padding: '10px', margin: '5px' }}>
      <h3>Name: {mission.name}</h3>
      <p>Status: {mission.status}</p>
      <p>Priority: ({mission.priority})</p>
      <p>Description: {mission.description}</p>
    </div>  )
}

export default MissionCard