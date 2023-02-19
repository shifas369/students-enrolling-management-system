const express = require('express');
const cors = require('cors');
const logger = require('morgan'); // display  api calls in terminal
const PORT = 8524;

require('./middleware/mongodb')  // initiate mongodb connection

const app = new express();
app.use(cors()); // help to connect frontend and backend seemlessly
app.use(express.json()); //receive data from frontend to backend
app.use(express.urlencoded({extended:true})); // useful when we use files,imgs etc
app.use(logger('dev'));

//api
const api = require('./routes/api');
app.use('/api',api);

  





//server code
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})