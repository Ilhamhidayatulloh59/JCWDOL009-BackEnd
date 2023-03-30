const express = require("express")
const PORT = 2000
const app = express()
const db = require("./models")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is my API")
})

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true })
    console.log(`server running at port : ${PORT}`);
})