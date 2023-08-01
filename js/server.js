/* // #1
// nodejs runs on a server, not in a clients browser
console.log("Hello World!");
// global object instead of a window object
console.log(global);
// import modules
const os = require('os');
const path = require('path');
const {
    add, 
    subtract, 
    multiply, 
    divide,
} = require('./math');

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
// use the imported modules to get info about the server

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// print out an object with all the info about the path
console.log(path.parse(__filename));
*/

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'assets', 'lorem.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'assets', 'promise_write.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'assets', 'promise_write.txt'), '\n\nPromise Append File Test.');
        await fsPromises.rename(path.join(__dirname, 'assets', 'promise_write.txt'), path.join(__dirname, 'assets', 'new_promise_write.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'assets', 'new_promise_write.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
};

fileOps();

/*
fs.readFile(path.join(__dirname, 'assets', 'lorem.txt'), 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
*/

/*
// asynchronous allows for this to run while the file is being read
console.log('Hello...');


fs.writeFile(path.join(__dirname, 'assets', 'write.txt'), 'Write File Test.', (err) => {
    if (err) {
        throw err;
    }
    console.log('Write Complete');

    fs.appendFile(path.join(__dirname, 'assets', 'write.txt'), '\n\nAppend File Test.', (err) => {
        if (err) {
            throw err;
        }
        console.log('Append Complete');

        fs.rename(path.join(__dirname, 'assets', 'write.txt'), path.join(__dirname, 'assets', 'new_write.txt'), (err) => {
            if (err) {
                throw err;
            }
            console.log('Rename Complete');
        });
    });
});

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: , ${err}`);
    process.exit(1);
});

*/