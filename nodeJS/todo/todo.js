const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    console.log(tasks);
    saveTask(tasks);
    console.log('Task Added:', task);
    
}

const saveTask = (tasks) => {
    try {
        const dataJSON = JSON.stringify(tasks)
        fs.writeFileSync(filePath, dataJSON);
    } catch (error) {
        return `error saving task`
    }
}

const listTask = () => {
    const tasks = loadTasks();
    tasks.forEach(task => {
        console.log(task);
    })
}

const removeTask = (number) => {
    const tasks = loadTasks();
    if(number >= tasks.length)return `Wrong input!!`;
    const removedTask = tasks.splice(number, 1);
    saveTask(tasks);
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === 'add'){
    addTask(argument);
}
else if(command === 'list'){
    listTask();
}
else if(command === 'remove'){
    removeTask(parseInt(argument));
}
else {
    console.log('Command not found!!');
}