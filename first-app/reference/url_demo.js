const url = require('url');

const urlName = new URL('http://mywebsite.com/login.html?id=110&status=active');

// return url
console.log(urlName.href);

// host name
console.log(urlName.host);

// host name (without port)
console.log(urlName.hostname);

// path name
console.log(urlName.pathname);

//serialized query
console.log(urlName.searchParams);

// add param

urlName.searchParams.append('adc', '123');
console.log(urlName.searchParams);

urlName.searchParams.forEach((name, value) =>
    console.log(`${name} : ${value}`));