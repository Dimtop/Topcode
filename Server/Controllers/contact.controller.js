var SibApiV3Sdk = require('sib-api-v3-sdk');
const nodemailer = require('nodemailer');
const path = require('path');
exports.postContact = async (req,res)=>{

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
        subject: req.body.service, // Subject line
        text: req.body.message +" " + req.body.phone, // plain text body
    },(err)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log("SENT")
      }
    });

    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SB_API_KEY;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //apiKey.apiKeyPrefix['api-key'] = "Token"
    
    // Configure API key authorization: partner-key
    var partnerKey = defaultClient.authentications['partner-key'];
    partnerKey.apiKey = process.env.SB_API_KEY;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix['partner-key'] = "Token"
    
    var apiInstance = new SibApiV3Sdk.ContactsApi();

    var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
    
    createContact  = {
        email:req.body.email,
        attributes:{
            FIRSTNAME:req.body.name,
            SMS:req.body.phoneCode + req.body.phone
        },
        updateEnabled:true
    };

    apiInstance.createContact(createContact).then(function(data) {
      console.log('API called successfully. Returned data: ' + data);
      res.status(200).redirect("/contact.html")
    }, function(error) {
      console.error(error);
      res.status(200).redirect("/error.html")
    });
};