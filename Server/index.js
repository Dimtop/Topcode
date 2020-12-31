//Libraries
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path")
//Middlewares



//Routers
const contactRouter  = require("./Routers/contact.router");
const analyticsRouter = require("./Routers/analytics.router");
const contestRouter = require("./Routers/contest.router")
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
app.use(express.static('public/dist'));

//Routing
app.use("/api/contacts",contactRouter);
app.use("/api/analytics",analyticsRouter);
app.use("/api/contest",contestRouter)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dist","index.html"));
  });


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


