require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('DataBase connected')
}).catch((err) => {
    console.log('Connection with DataBase failed: ', err)
})