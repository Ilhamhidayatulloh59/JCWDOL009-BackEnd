const db = require("../models")
const {Op} = require("sequelize")
const sequelize = require("sequelize")
const user = db.User

module.exports = {
    getAllUser : async (req, res) => {
        try {
            const data = await user.findAll({
                attributes: ["id", "username", "email", "age"],
                // where: {
                //     age: {
                //         [Op.gte]: 25
                //     }
                // }
            })
            res.status(200).send({
                status: true,
                data
            })
        } catch (err) {
            console.log(err);
            res.status(400).send(err)
        }
    },
    getUserById : async (req, res) => {
        try {
            const data = await user.findAll({
                where: {
                    id: req.params.id
                },
                attributes: ["id", "username", "email", "age"]
            })
            res.status(200).send({
                status: true,
                data
            })
        } catch (err) {
            console.log(err);
            res.status(400).send(err)
        }
    },
    getTotalUser : async (req, res) => {
        try {
            const total = await user.findAll({
                attributes: [[sequelize.fn('COUNT', sequelize.col('id')), "total user"]]
            })
            res.status(400).send({
                status: true,
                total
            })
        } catch (err) {
            console.log(err);
            res.status(400).send(err)
        }
    }
}