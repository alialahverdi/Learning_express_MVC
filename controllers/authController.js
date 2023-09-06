// const db = require('../db')

class AuthController {

    index(req, res) {
        // db.query(`SELECT email,mobile FROM USERS WHERE id = ?`, [1], (error, result, fields) => {
        //     if (error) throw error
        //     console.log('result ======>', result)
        // })

        // db.query(`UPDATE users SET name = ? WHERE id = ?`, ['ali', 1], (error, result, fields) => {
        //     if (error) throw error
        //     console.log('result ======>', result)
        // })


        // const newUser = {
        //     email: 's@gmail.com',
        //     name: 'saeed',
        //     mobile: '9125125267',
        //     status: 3
        // }
        // db.query(`INSERT INTO users SET ?`, newUser, (error, result, fields) => {
        //     if (error) throw error
        //     console.log('result ======>', result)
        // })

        res.send({
            success: "Hello Auth"
        })
    }
}

module.exports = new AuthController;