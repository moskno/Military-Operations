import React, {useState, useEffect} from "react";
import api from '../services/api';
import MissionCard from '../components/MissionCard'
import { Mission } from '../types/MissionTypes';


const MissionList:React.FC = () => {
    const [missions, setMissions] = useState<Mission[]>([]);

    useEffect(() => {
        const fetchMissions = async () => {
          try {
            const response = await api.get<Mission[]>('');
            setMissions(response.data);
          } catch (error) {
            console.error('Error fetching missions', error);
          }
        };
        fetchMissions();
      }, []);
  return (
    <div>
    <h2>Missions</h2>
    {missions.map((mission) => (
      <MissionCard key={mission.id} mission={mission} />
    ))}
  </div>
  )
}

export default MissionList
