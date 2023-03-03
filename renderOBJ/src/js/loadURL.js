const process = require('node:child_process');

process.exec('node ./src/js/downloadIMG.js', function(error, stdout, stderr){
    console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
})