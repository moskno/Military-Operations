import React from 'react';
import { Mission } from '../types/MissionTypes';
import "../styles/MissionCard.css"

interface MissionCardProps{
    mission: Mission;
}
const MissionCard: React.FC<MissionCardProps> = ({mission}) => {
  return (
    <div className='card' style={{ backgroundColor: mission.status === 'Pending' ? 'red' : mission.status === 'In Progress' ? 'orange' : 'green'}}>
      <h3>Name: {mission.name}</h3>
      <p>Status: {mission.status}</p>
      <p>Priority: ({mission.priority})</p>
      <p>Description: {mission.description}</p>
    </div>  )
}

export default MissionCard