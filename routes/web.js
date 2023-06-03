import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/", StudentController.getAllDoc);
router.post("/", StudentController.createDoc);
router.get("/:id", StudentController.getSingleDoc);
router.put("/:id", StudentController.updateDoc);
router.delete("/:id", StudentController.deleteDoc);

export default router;
