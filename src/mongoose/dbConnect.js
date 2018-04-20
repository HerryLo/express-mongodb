import mongoose from 'mongoose'
import constant from '../utils/constant'

mongoose.Promise = global.Promise;
global.mongoose = mongoose

function connect() {
    mongoose.connect(constant.dbUrl, {
        useMongoClient: true
    })
    const db = mongoose.connection;
    db.once('open', (callback)=> {
        console.log('db connection success:');
    });
    db.on('error', ()=> {
        console.log('db connection error:')
        db.close();
    });
}
module.exports = {
    connect: connect,
    mongoose: mongoose
}