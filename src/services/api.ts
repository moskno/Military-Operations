import axios from 'axios';
import {Mission} from '../types/MissionTypes';

const API_BASE_URL = 'https://reactexambackend.onrender.com/missions/';
const API_KEY = '1278845';

export const getMissions = async () => {
    return await axios.get(`${API_BASE_URL}${API_KEY}`);
};

export const addMission = async (mission: Mission) => {
    return await axios.post(`${API_BASE_URL}${API_KEY}`,mission);
};

export const deleteMission = async (id: number) => {
    return await axios.delete(`${API_BASE_URL}${API_KEY}/${id}`);
};

export const updateMissionStatus = async (id: number) => {
    return await axios.post(`${API_BASE_URL}${API_KEY}/progress/${id}`);
};

