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
        default: 'Medium'
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
})

const TasksModel = new mongoose.model('Tasks',taskSchema);

module.exports = {
    TasksModel
}