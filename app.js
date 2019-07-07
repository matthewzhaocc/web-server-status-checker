const ping = require('ping');
const fs = require('fs');
var hosts = ['10.20.0.72', '10.20.0.71', '10.20.0.75','10.20.0.70','10.20.0.80'];

  fs.writeFile("index.html","",(err)=>{})
function teststat(){
  hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
      var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';

      msg+="<br>";
      //console.log(msg);
      fs.appendFile("index.html",msg,(err)=>{})


      });

  });
  console.log("test")

}

teststat()
