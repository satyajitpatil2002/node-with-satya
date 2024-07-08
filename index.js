const http = require("http");
const express = require("express");

const app = express(); // app is an instance of express
// app.get("/", (req, res) => {
//     return res.send("hello from homepage");
// });
app.get("/about", (req, res) => {
    return res.send("hello from about page");
});

const myServer = http.createServer(app);

myServer.listen(3000, () => console.log("server started on port 3000"));




































// const { log } = require("console");
// const http=require("http");
// const fs = require("fs");




// //const  myServer= http.createServer(app);

// const  myServer= http.createServer((req,res)=>{
//     const log=`${Date.now()}: ${req.url} new request reciveed \n`;
//     fs.appendFile('log.txt',log,(error,data)=> {

//         switch(req,url){
//             case '/':res.end("homepage");
//             break;
//             case '/about':res.end("i am satya ");
//             break;
//             default:
//                 res.end("404 not found ");



//         }
//     });
//     res.end("hellow from  satya Server again ");

// });
// myServer.listen(8000,()=> console.log("server started"));
