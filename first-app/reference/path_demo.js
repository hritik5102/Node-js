const path = require('path');
// const model = require('./logger');
// const obj = require('./logger');

const {
    final: {
        b: bm,
        main
    }
} = require('./logger');

console.log(main);
console.log(bm);

console.log("print location of filename :" + __filename);
console.log("filename :" + path.basename(__filename));
console.log("extenstion_name :" + path.extname(__filename));
// create a path objectFit: 
console.log("parse:" + path.parse(__filename).base);
console.log("concatenate :" + path.join(__filename, 'text', 'hello.html'));