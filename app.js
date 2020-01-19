const ping = require('ping');
const http = require('http');

var hosts = [
	'10.20.0.72', 
	'10.20.0.71', 
	'10.20.0.75',
	'10.20.0.70',
	'10.20.0.80'
	];
var resp = '';
http.createServer(function (req, res) {
	
	hosts.forEach(function(host){
		ping.sys.probe(host, function(isAlive){
			resp += 'host ' + host+ ' status is ' + isAlive + '\n';
		});
	});
	console.log(resp);
	res.write(resp);
	res.end();
}).listen(8080);



