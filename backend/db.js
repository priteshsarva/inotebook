const mongoose = require('mongoose');
// const mongooseURI="mongodb://127.0.0.1:27017/inotebook";

const connectToMongo= async ()=>{
       await mongoose.connect(process.env.MOGO_URI);
       console.log( "Connected to MongoDB"); 
}

module.exports = connectToMongo;