 const mongoose = require('mongoose')

 

 const connectDB = (url) =>{
  
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
//mongoose.connect(url, {
//        useNewUrlParser: true,
//        useCreateIndex: true,
//        useFindAndModify: false,
//        useUnifiedTopology: true,
//    })
}

 module.exports = connectDB


// .then(()=>console.log('CONNECT TO THE DB ...'))
// .catch((err)=>console.log(err))