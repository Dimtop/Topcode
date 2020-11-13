//Libraries
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//Middlewares



//Routers
const contactRouter  = require("./Routers/contact.router");

//Initiallizing the app
const app = express();

//Configurations
dotenv.config();

//Middleware configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

//Static files
app.use(express.static('public'));

//Routing
app.use("/api/contacts",contactRouter);

//Initializing the server
app.listen(process.env.PORT, (err)=>{
    console.log(process.env.SMTP_USER)
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on: " + process.env.PORT);
     
    }
})


