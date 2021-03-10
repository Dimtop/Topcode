
//Libraries
const path = require("path");
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const mailRouter = require("./routers/mail.router");
//App
const app = express();


//Configuration
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());


//Static file configuration
app.use(express.static("public"));
app.use(express.static("/public/assets"));

app.use("/api/mail",mailRouter);

//Static file serving
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
//Initializing the server
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on: " + process.env.PORT);
    
     
    }
})