// import express (web framework that sits on top of Node.js)
const express = require('express');

// MongoDB connection utility
const mongoose = require ('mongoose');

// prevents cross-origin request errors
const cors = require('cors');

// used to parse formdata in POST requests into req.bodyobject.
const bodyParser = require('body-parser');

//  armours our API to prevent attacks
const helmet = require('helmet');

// import and configure dotenv - manages user and password for MongoDB user
const dotenv = require('dotenv');
    dotenv.config();

// import routes for jobs and companies from routes folder
const routes = require('./routes/');

// setup Express and Router
const app = express();
const router = express.Router();

// set up routes using our routes and Express Router. 
routes(router)

// set url for MLab DB and port for backend server
const url = process.env.MONGODB_URI;
const port = 3001 || process.env.PORT;

// // Connect to MongoDB
// try {
//     mongoose.connect(
//         url,
//         { useNewUrlParser: true } 
//     )
// }catch (error){

// }

// from https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
// do we need any of this extra stuff for the DB Connection? 

mongoose.connect(
    url,
    { useNewUrlParser: true } 
)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet())

// set up api (so you can access backend server from localhost:3001/api/test, for example)
app.use('/api', router)

// start server
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

