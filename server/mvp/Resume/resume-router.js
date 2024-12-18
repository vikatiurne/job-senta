const { Router } = require("express");
const resumeController = require("./resumeController");
const authMiddleware = require("../../middlewares/AuthMiddleware.js");

const router = new Router();

router.post("/create", authMiddleware, resumeController.create);
router.get("/getAll", authMiddleware, resumeController.getAll);
router.get("/getOne/:id", resumeController.getOne);
router.put("/update/:id",authMiddleware, resumeController.update);
router.delete("/deleteOne/:id", authMiddleware, resumeController.delete);
router.post("/deleteSeveral", authMiddleware, resumeController.delete);
router.post("/clone/:id", authMiddleware, resumeController.clone);
router.put("/archiveOne/:id", authMiddleware, resumeController.archive);
router.put("/archiveSeveral", authMiddleware, resumeController.archive);
router.put("/favorite/:id", authMiddleware, resumeController.favorite);

module.exports = router;
