#!/usr/bin/env node

var fs = require('fs-extra');
var chalk = require('chalk');
var path = require('path');

if(process.argv.length != 3){
	return console.log(chalk.red('IndesError: Index out of range'));
}
else{
	var ff = process.argv[2]; // ff is file/folder
	if(fs.existsSync(ff)){
		fs.remove(ff,err => {
			if(err){
				return console.log(chalk.red(err));
			}
			else{
				console.log(chalk.green('poof! deleted'));
			}
		});
	}
	else{
		console.log(chalk.red('FileError: No such file/directory exists'));
	}
}