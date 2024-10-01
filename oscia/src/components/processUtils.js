import { processTypes } from './processTypes';

export const generateProcesses = () => {
    const keys = Object.keys(processTypes);
    return keys.map(type => ({
        type: type,
        burstTime: Math.floor(Math.random() * 11) + 5,  
        arrivalTime: Math.floor(Math.random() * 31)    
    })).sort((a, b) => a.arrivalTime - b.arrivalTime);  
};
