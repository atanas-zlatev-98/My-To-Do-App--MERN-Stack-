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

async function getAllTasks() {
    const allTasks = await TasksModel.find();

    if(!allTasks || allTasks.length <=0){
        throw new Error('No Tasks Found!');
    }

    return allTasks
}

module.exports ={
    createTask,
    getAllTasks
}
