export interface Mission{
    id?: number;
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priority: 'High' | 'Medium' | 'Low';
    description: string;
}