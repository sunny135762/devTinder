const express = require("express")

const app = express()

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({firstName:"Sunny",lastName:"Raju"})
})


app.listen(3000,()=>{
    console.log("servre started at port 3000")
})