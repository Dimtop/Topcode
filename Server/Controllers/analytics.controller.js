const path = require('path');
const fs = require("fs");
var geoip = require('geoip-lite');

exports.trackContactButtonPress = async function(req,res){

    var geo  =geoip.lookup(req.headers['x-forwarded-for']);
    console.log(geo)
    if(geo){
        fs.appendFileSync(path.join(__dirname,"../Data","contactButtonTrack.txt"),"\n\n"+ geo.country +" " + geo.city + " " +geo.region + " " + req.ip + " " + req.headers["user-agent"]+" " + req.headers['x-forwarded-for'] );
    
    }
	else{
	 fs.appendFileSync(path.join(__dirname,"../Data","contactButtonTrack.txt"),"\n\nViewed but no data tracked. " + req.ip +" " + req.connection.remoteAddress+ " " + req.headers['x-forwarded-for']);
	}
    res.send({success:true})
   
}