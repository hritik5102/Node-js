const os = require('os');

// check the platform
console.log(os.platform());

// cpu architecture
console.log(os.arch());

// cpu info
console.log(os.cpus());

//free memory
console.log(os.freemem());
// total memory
console.log(os.totalmem());
// home directory
console.log(os.homedir());