const express = require('express');
const { configExpress } = require('./config/configExpress');
const { configDatabase } = require('./config/configDatabase');
const { configRoutes } = require('./config/configRoutes');
require('dotenv').config();


startServer();
async function startServer() {
    
    const app = express();

    await configDatabase();
    configExpress(app);
    configRoutes(app);
    
}