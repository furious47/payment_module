const mongoose = require('mongoose')

// MONGO_URI=mongodb+srv://kaneki:passed@cluster0.1gvihdd.mongodb.net/?retryWrites=true&w=majority
const connect = async (url)=>{
    return await mongoose.connect(url).then(()=> console.log('Successfully connected to DB')).catch((err)=> console.log(err))
}

module.exports = connect