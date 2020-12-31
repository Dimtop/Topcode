var SibApiV3Sdk = require('sib-api-v3-sdk');
const nodemailer = require('nodemailer');
const path = require('path');
exports.postContest = async (req,res)=>{

    console.log(process.env.SMTP_USER)
    var transporter = nodemailer.createTransport({
        host: "topcode.gr",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // generated ethereal user
          pass: process.env.SMTP_PASS, // generated ethereal password
        },
      });

    var info = await transporter.sendMail({
        from: req.body.name + " <" + req.body.email + ">", // sender address
        to: "info@topcode.gr", // list of receivers
        subject: req.body.name, // Subject line
        text: req.body.name +" " + req.body.field + " " + req.body.email + " " + req.body.phone, // plain text body
    },(err)=>{
      if(err){
        res.redirect("/error")
      }
      else{
        res.redirect("/contest/success")
      }
    });

  
};