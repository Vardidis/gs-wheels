mongoose = require('mongoose');
require('dotenv').config();

const obj = mongoose.Schema.Types.ObjectId;

const mongooseConnect = async() => {    
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }else{
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri);
    }
}

module.exports = {mongooseConnect, obj};