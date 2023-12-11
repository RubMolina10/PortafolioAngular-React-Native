const mongosee = require('mongoose');
const url ='mongodb+srv://ruben:rabano@devruben.yrp4rpk.mongodb.net/?retryWrites=true&w=majority'

mongosee.connect(url)
.then(db => console.log("\x1b[32m",'La base de datos esta conectada'))
.catch(err => console.log("\x1b[31m","Sucedio un error",err));
module.exports=mongosee;