import express from 'express';
import { getTasks, createTask } from '../controllers/TaskController.js';
import { ValidateTask } from '../validators/TaskValidator.js';
import { get } from 'mongoose';

const router = express.Router();

router.get("/", getTasks);
router.post("/", ValidateTask, createTask);
router.put(":id", ValidateTask, updateTasks);
router.delete("/:id", deleteTasks);

export default router;