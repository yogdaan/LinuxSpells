#!/usr/bin/env node

var tar=require('tar');
var chalk=require('chalk');
var fs = require('fs-extra');

if(process.argv.length < 4){
	console.log(chalk.red('IndexError: Index out of range!'));
	return;
}
else{
	var sources = [];
	for (var i = 2; i < process.argv.length-1; i++)
	{
		sources.push(process.argv[i]);
	}
	var destination = process.argv[process.argv.length-1];
	var destination=destination.split("/");
	
	if(destination.length != 1){
		var filename = destination.pop();
		destination = destination.join("/");
		
		if (!fs.existsSync(destination)){
			destination = '/' + destination;
		}
		
		if(!filename.endsWith('.tgz')){
			filename += '.tgz';
		}
		
		destination += "/" + filename;
	}
	else{
		
		filename=destination.pop();
		if(!filename.endsWith('.tgz')){
			filename += '.tgz';
		}
		destination = filename;
	}
	
	tar.c(
		{
			gzip: true,
			file: destination
		},
		sources
	).then(function(res) { 
		console.log(chalk.yellow('Successfully compressed'));
	}).
	catch(function(err){
		console.log(chalk.red('FileError: No such file/directory exists'));
	});
}