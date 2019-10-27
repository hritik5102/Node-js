const fs = require('fs');
const path = require('path');


// when we want to add file
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("file created succesfully");
// });

// when we want to add file and write a content inside a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hii jon',
    err => {
        if (err) throw err;
        console.log("file created succesfully");
    });

// we can read a file and append file , rename a file