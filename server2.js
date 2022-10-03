const express=require('express')
const time=require("./middlewares/time")
//instance of express method
console.log(time)
const app = express()
require('dotenv').config()
//console.log(process.env)
//console.log(app)
app.use(express.static("public"))
//routes
app.get("/",time,(req,res)=>{
    //console.log(req.url,req.method);
    res.status(200).sendFile("index.html",{root:__dirname})
})


app.get("/about",(req,res)=>{
    //console.log(req.url,req.method);
    res.status(200).sendFile("about.html",{root:__dirname})
})

app.use((req,res)=>{
    res.status(404).send("page not found ")
})





const port =process.env.PORT||5000

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at port ${port}`)
})



