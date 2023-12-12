const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL
const connectDB = () => {

    mongoose.connect(dbUrl)
        .then(() => {
            console.log("DB Connected");
        })
        .catch((e) => {
            console.log("Mongo Error");
            console.log(e);
            process.exit(1);
        })

}
module.exports = connectDB