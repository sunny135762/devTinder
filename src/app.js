const express = require("express")

const app = express()

app.get("/user", (req, res) => {
    res.send({firstName:"Sunny",lastName:"Raju"})
})
app.post("/user", (req, res) => {
    res.send("Data successfully to the database")
})
app.delete("/user", (req, res) => {
    res.send("Deleted successfully")
})
app.use("/test", (req, res, next) => {
    res.send("Hello from the server")
})

app.listen(3000,()=>{
    console.log("servre started at port 3000")
})