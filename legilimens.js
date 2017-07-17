#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

if(process.argv.length != 3){
	console.log('IndexError: Index out of range');
}
else{
	var fileName = process.argv[2];
	if(fs.existsSync(fileName)){
		fs.readFile(fileName,function(err,data){
			if(err){
				return console.log(chalk.red(err));
			}
			console.log(chalk.yellow(data));
		});
	}
	else{
		console.log(chalk.red('FileError: No such file/directory exists'));
	}
}