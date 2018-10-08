#!/usr/bin/env node

var fs = require('fs-extra');
var chalk = require('chalk');

if(process.argv.length != 4){
	console.log(chalk.red('IndexError: Index out of range!'));
	return;
}
else{
	var source = process.argv[2];
	var destination = process.argv[3];

	if(fs.existsSync(source)){
		const srcStats = fs.statSync(source);
		const destStats = fs.statSync(destination);

		if (srcStats.isFile() && destStats.isDirectory()){
			const temp = source.split('/');
			destination += '/' + temp[temp.length - 1];
		}

		fs.copy(source,destination,err => {
			if(err){
				return console.log(err);
			}
			console.log(chalk.yellow('copied successfully!'));
		});
	}
	else{
		console.log(chalk.red('FileError: No such file/directory exists'));
	}
}
