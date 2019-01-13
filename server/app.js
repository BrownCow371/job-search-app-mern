const express = require('express');
const routes = require('./routes/');
const mongoose = require ('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI

let port = 3001 || process.env.PORT

// try {
//     mongoose.connect(url, {
//         useMongoCient: true
//     })
// }catch (error){

// }

// Connect to MongoDB
mongoose.connect(
    url,
    { useNewUrlParser: true } 
);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up routes
routes(router)

// set up middleware
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

// set up api route
app.use('/api', router)

// start server
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

