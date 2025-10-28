const mongoose =require('mongoose');
require('../models/TaskModel.js');

async function configDatabase(){
    const connect = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`Database Connected: ${connect.connection.host}`)
}

module.exports = {
    configDatabase
}