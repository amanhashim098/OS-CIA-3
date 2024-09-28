import { processTypes } from './processTypes';

export const generateProcesses = () => {
    const keys = Object.keys(processTypes);
    return keys.map(type => ({
        type: type,
        burstTime: Math.floor(Math.random() * 11) + 5,  // Burst time between 5 and 15
        arrivalTime: Math.floor(Math.random() * 31)    // Arrival time between 0 and 30
    })).sort((a, b) => a.arrivalTime - b.arrivalTime);  // Sorting by arrival time
};
