const express = require("express")
const app = express()

app.get("/",(req, res)=> {

})
var date = ""
app.get("/getDate",(req, res)=> {
res.send(date)
})
app.get("/update/:date",(req, res)=> {
date = req.params.date 
res.send("Ok")
})

app.listen(3000, ()=>{
    console.log("listening to port 3000!")
})