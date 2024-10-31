import React, {useState} from 'react';
import api from '../services/api';
import { Mission } from '../types/MissionTypes';

const MissionForm: React.FC = () => {
    const [formData, setFormData] = useState<Mission>({
        name: '',
        status: 'Pending',
        priority: 'Low',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await api.post('', formData);
          window.location.reload();
        } catch (error) {
          console.error('Error adding mission', error);
        }
      }; 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Add Mission</button>
    </form>
  );
}

export default MissionForm