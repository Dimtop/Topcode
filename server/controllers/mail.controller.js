const nodemailer = require("nodemailer");

exports.sendContactFormMail = async(req,res)=>{

    console.log(req.body);

    var transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:true,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    })
    await transporter.sendMail({
        from:process.env.MAIL_FROM,
        to:process.env.MAIL_ADMIN,
        subject:"Νέο μύνημα από topcode.gr",
        text:"Name: " + req.body.name +"\n" + "Email:" + req.body.email + "\n" +  "Phone:" + req.body.phone + "\n" + "Message:" + req.body.message
    },(mailErr,info)=>{
        if(mailErr){
            console.log(mailErr)
            res.send({error:"Υπήρξε ένα πρόβλημα κατά την αποστολή."})
            return;
        }
        res.send({err:null})
    })
}