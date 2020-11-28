const path = require('path');
const fs = require("fs");
var geoip = require('geoip-lite');

exports.trackContactButtonPress = async function(req,res){

    var geo  =geoip.lookup(req.ip);
    console.log(geo)
    if(geo){
        fs.appendFileSync(path.join(__dirname,"../Data","contactButtonTrack.txt"),"\n"+ geo.country +" " + geo.city + " " +geo.region + " " + req.ip + " " + req.headers["user-agent"] );
    
    }

    res.send({success:true})
   
}