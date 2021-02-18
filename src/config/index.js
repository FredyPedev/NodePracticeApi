if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
};

module.exports = {

    PORT:process.env.PORT,
    API_NAME: process.env.AP_NAME,
    MONGO_URI : process.env.MONGO_URI


};