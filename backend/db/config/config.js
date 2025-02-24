
require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
module.exports = {
    development : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: "postgres",
        
    },
    // test : {
    //     username : process.env.DB_TEST_USERNAME,
    //     password : process.env.DB_TEST_PASSWORD,
    //     database : process.env.DB_TEST_DATABASE,
    //     port: process.env.DB_TEST_PORT,
    //     host: process.env.DB_TEST_HOST,
    //     dialect: "postgres",
    // },
};






