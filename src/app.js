const express = require("express")

const app = express()

// app.use("/",(req,res)=>{
//     res.send("Hello from dashboard")
//     })

    app.use("/hello",(req,res)=>{
        res.send("Hello sunny mallepogu")
        })

app.use("/test",(req,res,next)=>{
res.send("Hello from the server")
})

app.listen(3000,()=>{
    console.log("servre started at port 3000")
})