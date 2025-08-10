const express = require('express');
const app = express();

console.dir(app);
let port = 8080;

app.listen(port,()=>{
    // app.use((req,res)=>{
    // res.send("This is a basic response!");
// });
// app.get('/apple',(req,res)=>{ 
    // console.log("Request recieved");
    // res.send({
    //     name:"Apple",
    //     color: "red",
    // });
// })
app.get("/",()=>{
    console.log("this is homepage!");
})
app.get("/:username/:age",(req,res)=>{
    console.log(req.params);
    res.send(`Hello, ${req.params.username}, age : ${req.params.age}`);
    // console.log("Name :",req.params.username);
    // console.log("age :",req.params.age);
  })
})
