const eventEmitter = require('events');
const url = require('uuid');

const events = new eventEmitter.EventEmitter();

events.on("click", () => {
    setTimeout(() => {
        console.log(121);
    }, 2000);
})

const val = events.emit("click");

const a = 2;

const obj = {
    name: "Asas"
}

const b = 1212;


const main = {
    name: "Asas"
}

const final = {
    b,
    main
}

module.exports.final = final;


// class Logger extends eventEmitter {
//     log(msg) {
//         this.emit('message', {
//             id: uuid.v4(),
//             msg
//         })
//     }
// }