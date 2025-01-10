const { Router } = require("express");
const goalController = require("./goalController");
const authMiddleware = require("../../middlewares/AuthMiddleware");

const router = new Router();

router.post("/create", authMiddleware, goalController.create);
router.get("/get", authMiddleware, goalController.get);
router.put("/update", authMiddleware, goalController.update);
router.delete("/delete", authMiddleware, goalController.delete);

module.exports = router;
