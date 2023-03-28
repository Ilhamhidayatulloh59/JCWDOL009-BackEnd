const router = require("express").Router()
const { userControllers } = require("../controllers")

router.get("/", userControllers.getAllUser)
router.get("/total", userControllers.getTotalUser)
router.get("/:id", userControllers.getUserById)

module.exports = router