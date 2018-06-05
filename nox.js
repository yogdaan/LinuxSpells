var exec = require('child_process').exec;

function shutdown(callback){
exec('shutdown now', function(error, stdout, stderr){ callback(stdout); });
}

shutdown(function(output){
console.log(output);
});
