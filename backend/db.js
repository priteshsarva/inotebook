const mongoose = require('mongoose');
const mongooseURI="mongodb://127.0.0.1:27017";

const connectToMongo= ()=>{

     mongoose.connect(mongooseURI);
    
     console.log("Mongoose connected succeful");
    console.log("test");
}

module.exports = connectToMongo;