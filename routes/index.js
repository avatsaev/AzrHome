var path = require("path");
var cfg = require(path.join(__dirname, '..' , 'configuration', "config"));

var sys = require('sys')
var exec = require('child_process').exec

function puts(error, stdout, stderr) { sys.puts(stdout) }

//exec("ls", puts); // Command

exports.index = function(req, res){
  res.render('index', { title: cfg.application.title});
};


exports.lamp_on = function(req, res){
  console.log(req);
  exec("sh /Users/avatsaev/test/test.sh", puts);
  res.send("lamp-on!", 200);
};

exports.ping = function(req, res){
  res.send("pong!", 200);
};
