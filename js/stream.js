const fs = require('fs');
const rs = fs.createReadStream('./js/assets/lorem.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./js/assets/new_lorem.txt');

/*
rs.on('data', (chunk) => {
    ws.write(chunk);
});
*/

rs.pipe(ws);