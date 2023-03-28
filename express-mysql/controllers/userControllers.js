const db = require("../config/db.js")

module.exports = {
    getAll: (req, res) => {
        db.query(`SELECT * FROM users`, (err, result) => {
            if(err) res.status(400).send(err)
            res.send({
                status: 200,
                data: result
            })
        })
    },
    getById: (req, res) => {
        db.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (err, result) => {
            if(err) res.status(400).send(err)
            res.send({
                status: 200,
                data: result
            })
        })
    },
    addUser: (req, res) => {
        const {username, email, password, age} = req.body
        db.query(`INSERT INTO users value (${null}, ${db.escape(username)}, ${db.escape(email)}, ${db.escape(password)}, ${db.escape(age)})`, (err) => {
            if(err) res.status(400).send(err)
            res.send({
                status: 200,
                message: "succes add new user"
            })
        })
    },
    deleteById: (req, res) => {
        db.query(`DELETE FROM users WHERE id = ?`, [req.params.id], (err) => {
            if(err) res.status(400).send(err)
            res.send({
                status: 200,
                message: `succes delete user with id ${req.params.id}`
            })
        })
    },
    editById: (req, res) => {
        db.query(`UPDATE users SET ? WHERE id = ?`, [req.body, req.params.id], (err) => {
            if(err) res.status(400).send(err)
            res.send({
                status: 200,
                message: `succes update user with id ${req.params.id}`
            })
        })
    }
}