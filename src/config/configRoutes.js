const {taskController} = require('../controllers/taskController');

function configRoutes(app){
    app.use(taskController);
}

module.exports = {
    configRoutes
}