const express=require('express');
const morgan =require('morgan');
const path = require('path');
const app = express();
const {Mongoose} = require('./database')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/tasks',require('./routes/task.routes'));
//Static files
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static());

///Here start the server--------
app.listen(app.get('port'),()=>{
    console.log(`Servidor en e puerto ${app.get('port')}`);

})