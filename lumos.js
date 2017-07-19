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

    var max = getMaxLength(items);
    var div = Math.floor(columns / max);
    
    for (var i=0; i<items.length; i++) {


        if(i % div == 0 && i != 0){
            console.log('');
        }
        if(!path.extname(items[i])){

            process.stdout.write(chalk.blue.bold(items[i]));
            for(var j = items[i].length; j <= max; j++){
                process.stdout.write(" ");
            }
        }
        else if(checkImg(path.extname(items[i]))){
            process.stdout.write(chalk.magenta.bold(items[i]));
            for(var j = items[i].length; j <= max; j++){
                process.stdout.write(" ");
            }
        }
        else if(checkZip(path.extname(items[i]))){
            process.stdout.write(chalk.red.bold(items[i]));
            for(var j = items[i].length; j <= max; j++){
                process.stdout.write(" ");
            }
        }
        else if(checkCode(path.extname(items[i]))){
            process.stdout.write(chalk.yellow.bold(items[i]));
            for(var j = items[i].length; j <= max; j++){
                process.stdout.write(" ");
            }
        }
        else{
            process.stdout.write(items[i]);
            for(var j = items[i].length; j <= max; j++){
                process.stdout.write(" ");
            }
        }

    }

    console.log('');

});
 

function getMaxLength(items){
    var max = 0;
    for(var i = 0; i< items.length ; i++){
        if(items[i].length > max){
            max = items[i].length;
        }
    }

    return max;
}


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
