const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

console.log("✅ MySQL connection pool created successfully");

module.exports = db;
// const db = connection.promise();
// connection.connect((err) => {
//     if(err) throw err;
//     console.log("My sql is connected !! Congrats.")
// });

// module.exports = connection;