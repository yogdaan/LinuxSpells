#!/usr/bin/env node

var path = require('path');
var figlet = require('figlet');
var chalk = require('chalk');
var fs = require('fs-extra');


var bannerHeading = "Linux  Spells"
var newSpell = "";
var spells = ['lumos','obliviate','geminio','legilimens','mobiliarbus','avada-kedavra','accio'];

if(process.argv.length != 3){

	figlet(bannerHeading,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.blue(data));
			console.log(chalk.yellow('\tPotter-ify your Linux Experience!'));
			console.log("\tType 'spells SPELL_NAME' for help");
			console.log('\nFollowing are the spells you can use:\n');
			console.log(chalk.yellowBright.bold('\t1.\tlumos'));
			console.log(chalk.blueBright.bold('\t2.\tobliviate'));
			console.log(chalk.cyanBright.bold('\t3.\tgeminio'));
			console.log(chalk.magentaBright.bold('\t4.\tlegilimens'));
			console.log(chalk.redBright.bold('\t5.\tmobiliarbus'));
			console.log(chalk.greenBright.bold('\t6.\tavada-kedavra'));
			console.log(chalk.yellowBright.bold('\t7.\taccio'));
			console.log('');
		}
	});
}
else{
	
	var spell = process.argv[2];;
	if(checkSpells(spell)){
		//console.log(newSpell);
		if(newSpell === "lumos"){
			lumos();
		}
		else if(newSpell === "obliviate"){
			obliviate();
		}
		else if(newSpell === "geminio"){
			geminio();
		}
		else if(newSpell === "legilimens"){
			legilimens();
		}
		else if(newSpell === "mobiliarbus"){
			mobiliarbus();
		}
		else if(newSpell === "accio"){
			accio();
		}
		else{
			avada_kedavra();
		}
	}
	else{
		return console.log(chalk.redBright("SpellError: Tried 'accio " + spell + "', but spell not found! "));
	}
}
	

// checkSpell function

function checkSpells(spell){
	for(var i = 0; i < spells.length ; i++){
		if(spell === spells[i]){
			newSpell = spell;
			return true;
		}
	}
	return false;
}


// spell functionS

function lumos(){
	var head = "lumos";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.yellowBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/lumos.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}


function obliviate(){
	var head = "obliviate";
	var para = 
	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.blueBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/obliviate.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}

function geminio(){
	var head = "geminio";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.cyanBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/geminio.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}

function legilimens(){
	var head = "legilimens";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.magentaBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/legilimens.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}

function mobiliarbus(){
	var head = "mobiliarbus";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.redBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/mobiliarbus.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}

function avada_kedavra(){
	var head = "avada-kedavra";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.greenBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/avada-kedavra.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}

function accio(){
	var head = "accio";

	figlet(head,{font:"Standard"},function(err,data){
		if(err){
			return console.log(chalk.red(err));
		}
		else{
			console.log(chalk.blueBright(data));
			console.log('');
			fs.readFile(path.resolve(__dirname,'spells/accio.txt'),function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(chalk.white(data));
				}
			});
		}
	});
}