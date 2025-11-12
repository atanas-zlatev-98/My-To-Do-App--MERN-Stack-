const {Router} = require('express');
const { createTask, getAllTasks } = require('../services/taskService');

const taskController = Router();

taskController.post("/task/create", async(req,res)=>{
    const {title,description,priority,taskType,endDate} = req.body;

    const task = {
        title,
        description,
        priority,
        taskType,
        endDate
    }

    try {
        const result = await createTask(task)
        res.status(201).json({message:'Task Created!',result})
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

taskController.get('/tasks/all', async (req,res)=>{

    try{
        const allTasks = await getAllTasks();
        res.status(201).json({message:'All Tasks!',allTasks});
    }catch(err){
        res.status(400).json({message:err.message});
    }
})

module.exports = {
    taskController
}