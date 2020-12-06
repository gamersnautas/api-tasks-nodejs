import { Router } from 'express';
import * as tasksController from '../controllers/tasks.controller';

const router = Router();

router.post('/', tasksController.createTask);

router.get('/done', tasksController.findDoneTasks);

router.get('/', tasksController.findAllTasks);

router.delete('/:id', tasksController.deleteTask);

router.get('/:id', tasksController.findOneTask);

router.put('/:id', tasksController.updateTask);

export default router;