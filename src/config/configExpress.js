const express = require('express');


function configExpress(app){
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    app.listen(process.env.EXPRESS_PORT || 5000,()=>{
        console.log(`Server Started at: ${process.env.EXPRESS_PORT || 5000}`)
    })
}

module.exports ={
    configExpress
}