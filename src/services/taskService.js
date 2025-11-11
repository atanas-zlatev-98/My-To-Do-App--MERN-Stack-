const { TasksModel } = require("../models/TaskModel");

async function createTask(taskParams) {
    
    const newTask = new TasksModel({
        title: taskParams.title,
        description: taskParams.description,
        priority:taskParams.priority,
        taskType: taskParams.taskType,
        endDate:taskParams.endDate
    })
    
    newTask.save();
    return newTask
}

module.exports ={
    createTask
}