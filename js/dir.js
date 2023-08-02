const fs = require('fs');

if(!fs.existsSync('./js/assets/new')) {
    fs.mkdir('./js/assets/new', (err) => {
        if (err) {
            throw err;
        }
        console.log('Directory Created');
    });
};

if(fs.existsSync('./js/assets/new')) {
    fs.rmdir('./js/assets/new', (err) => {
        if (err) {
            throw err;
        }
        console.log('Directory Deleted');
    });
};