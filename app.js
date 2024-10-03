const os = require("os");

const { insertData } = require('./db.js');

const  getMemoryUsage = () => {
    const memoryFree = os.freemem();
    const memoryTotal = os.totalmem();

    const memoryFreeInGB = memoryFree / (1024 ** 3);
    const memoryTotalInGB = (memoryTotal / (1024 ** 3)).toFixed(2);

    const memoryUsed = memoryTotal - memoryFree; 
    const memoryUsedInGB = (memoryUsed / 1024 ** 3).toFixed(2);
    const usedMemoryPercentage = ((memoryUsed / memoryTotal) * 100).toFixed(2); 

    console.log(`Całkowita pamięć: ${memoryTotalInGB} GB, zużycie wynosi: ${memoryUsedInGB} GB (${usedMemoryPercentage}%)`);

    return {
        total: memoryTotalInGB,       
        used: memoryUsedInGB,        
        procent: usedMemoryPercentage   
    };
}

const { total, used, procent } = getMemoryUsage();

insertData(total, used, procent); 