#!/usr/bin/env node

var fs = require('fs');
var chalk = require('chalk');
var path = require('path');

var cwd = process.cwd();

var img = ['.jpg','.jpeg','.png','.gif','.bmp','.tif','.svg']
var zip =['.rar', '.jar', '.zip', '.tar', '.mar', '.iso', '.lz', '.7zip', '.tgz', '.gz', '.bz2']
var codes = ['.cpp','.c','.py','.html','.js','.css','.java','.csproj','.rb','.pl','.pm','.sh']

var length = 0;
var columns = process.stdout.columns;

fs.readdir(cwd, function(err, items) {

    for (var i=0; i<items.length; i++) {


        if(!path.extname(items[i])){

            process.stdout.write(chalk.blue.bold(items[i] + "  "));
        }
        else if(checkImg(path.extname(items[i]))){
            process.stdout.write(chalk.magenta.bold(items[i] + "  "));
        }
        else if(checkZip(path.extname(items[i]))){
            process.stdout.write(chalk.red.bold(items[i] + "  "));
        }
        else if(checkCode(path.extname(items[i]))){
            process.stdout.write(chalk.yellow.bold(items[i] + "  "));
        }
        else{
            process.stdout.write(items[i] + "  ");
        }

        length = length + items[i].length + 2;

        if(length % columns >= (columns - 10)){
            console.log('');
        }
    }

    console.log('');

});
 


// Checking Functions


function checkImg(ext){
    for(var i = 0; i < img.length ; i++){
        if(ext === img[i]){
            return true;
        }
    }
    return false;
}

function checkZip(ext){
    for(var i = 0; i < zip.length ; i++){
        if(ext === zip[i]){
            return true;
        }
    }
    return false;
}

function checkCode(ext){
    for(var i = 0; i < codes.length ; i ++){
        if(ext === codes[i]){
            return true;
        }
    }
    return false;
}