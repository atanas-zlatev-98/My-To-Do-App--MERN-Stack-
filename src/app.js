const express = require('express');
const { configExpress } = require('./config/configExpress');
const { configDatabase } = require('./config/configDatabase');
require('dotenv').config();


startServer();
async function startServer() {
    
    const app = express();

    configExpress(app);
    await configDatabase();
    
}