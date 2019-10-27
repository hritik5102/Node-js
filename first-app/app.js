 // example - 1
 // take the attribute value of person;
 // to include a file path we use => './filename'
 // for core module we don't have to use => './filename' instead we can direclty write a 'filename'
 //  const result = require("./person")

 //  console.log(result)

 //----------------------------
 // example-2 

 const result2 = require("./person");
 const person1 = new result2('Mark', 20);

 person1.greeting();