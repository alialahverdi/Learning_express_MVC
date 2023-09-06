const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
})

connection.connect(error => {
    if (error) {
        console.log('something went wrong', error.message)
        return
    }
    console.log('mysql server is running')
})

module.exports = connection