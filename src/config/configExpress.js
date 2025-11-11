const express = require('express');
const cors = require('cors');

function configExpress(app){
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(cors({credentials:true,origin:'http://localhost:5173'}))

    app.listen(process.env.EXPRESS_PORT || 5000,()=>{
        console.log(`Server Started at: ${process.env.EXPRESS_PORT || 5000}`)
    })
}

module.exports ={
    configExpress
}