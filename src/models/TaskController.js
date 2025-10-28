const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    priority:{
        type: String,
        enum: ['Critical','High','Medium','Low'],
        default: 'Medium',
        required:true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
        required:true,
    },
    taskType:{
        type:String,
        enum: ['Personal','Work','Hobby'],
        required:true,
    },
    startData: {
        type:Date,
        default:Date.now,
        required: true
    },
    endDate:{
        type: Date,
        required:true
    }
})

const TasksModel = new mongoose.model('Tasks',taskSchema);

module.exports = {
    TasksModel
}