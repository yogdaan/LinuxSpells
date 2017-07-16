#!/usr/bin/env node

var exec = require('child_process').exec;
var url = require('url');
var chalk = require('chalk');

if(process.argv.length < 3){
	return console.log(chalk.redBright('IndexError: Index not found'));
}
else{
	var urlDown = "";
	for(var i = 2;i < process.argv.length ; i++){
		urlDown = urlDown + " " + process.argv[i];
	}
	var command = "wget" + urlDown;
	exec(command,function(err,stdout,stderr){
		if(err){
			return console.log(chalk.greenBright('FileError: Some error occured while fetching URL'));
		}
		return console.log(chalk.yellowBright('File Download successful'));
		
	});

}

