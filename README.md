# Lead_Management-
1) : create new folder 
2) : create server.js
3) : install npm init --y 
4) : "serve" : "node server.js"
5) : npm i express
6) : write code :
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Pakistan')
})

app.listen(3000, () =>{
    console.log("node api is running on the port of 3000")
})
and then run serve.js 
npm i nodemon -D
npm i mongoose 


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Naved:Navedijaz@nodefirstapi.u9ydq5a.mongodb.net/Node_API?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));



complete code : 


const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Pakistan')
})

app.listen(3000, () =>{
    console.log("node api is running on the port of 3000")
})
mongoose.connect('mongodb+srv://Naved:Navedijaz@nodefirstapi.u9ydq5a.mongodb.net/Node_API?retryWrites=true&w=majority')
  .then(() => console.log(' Moongose Connected!'));


{
"_name" : "Ali"
}

{
"_name" : "Ali",
"_email" : "aaa@gmail.com",
"_role" : "developer" ,
"_departments" : "computer science"
}


{
 "_jobTitle" : "Developer",
"_jobDescription" : "abc",
"_clientName":"abc",
"_clientEmail" :"abc",
"_clientPhone" :"abc",
"_companyName" :"abc",
"_companyURL" :"abc",
"_meetingDate" :"26/5/2023",
"_status" : "abc",
"_source" : "abc",
"_createdBy" :"26/5/2023",
"_assignedTo" :"26/5/2023",
"_createdAt" :"26/5/2023",
"_updatedAt" :"26/5/2023"
}







