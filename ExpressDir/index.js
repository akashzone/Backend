const express = require('express');
const app = express();

console.dir(app);
let port = 8080;

// app.listen(port,()=>{
//     app.use((req,res)=>{
//     res.send("This is a basic response!");
// });
// })

app.get('/apple',(req,res)=>{
    res.send({
        name:"Apple",
        color: "red",
    });
})