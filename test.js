var data = "";

for (var i=0;i<10000;i++){
    data+="ΔΕΝ ΞΑΝΑΚΑΝΩ CASHOUT\n";
}


fs = require('fs');
fs.writeFile('helloworld.txt', data, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});