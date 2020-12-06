import Task from '../models/Task';
import { getPagination } from '../libs/getPagination';

export const createTask = async (req, resp) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    });
    await newTask.save();
    resp.json(newTask);
};

export const deleteTask = async (req, resp) => {
    const { id } = req.params;
    const query = await Task.findByIdAndDelete(id);

    if (!query)
        return resp
            .status(404)
            .json({
                msg: `Task with id ${id} does not exists.`
            });

    const taskName = query.title;

    resp.json({
        'msg': `The task ${taskName} was deleted successfully.`
    });
};

export const findAllTasks = async (req, resp) => {
    const { size, page, title } = req.query

    const { limit, offset } = getPagination(page, size)

    const condition = title ? {

        title: { $regex: new RegExp(title), $options: 'i' }
    } : {};

    console.log(condition)

    const arrayTasks = await Task.paginate(condition, { offset, limit });

    if (arrayTasks.length == 0)
        return resp
            .status(404)
            .json({
                msg: 'No task registered'
            })
    resp.json(arrayTasks);
};

export const findOneTask = async (req, resp) => {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task)
        return resp
            .status(404)
            .json({
                msg: `No task with the id ${id}`
            });

    resp.json(task);
};

export const findDoneTasks = async (req, resp) => {
    const doneTasks = await Task.find({ done: true });
    resp.json(doneTasks);
};

export const updateTask = async (req, resp) => {
    const { id } = req.params;
    const fieldsToUpdate = req.body;
    const taskUpdated = await Task.findByIdAndUpdate(id, fieldsToUpdate);

    if (!taskUpdated)
        return resp
            .status(404)
            .json({
                msg: `No task with the id ${id} to updated.`
            })

    const taskName = taskUpdated.title

    resp.json({
        'msg': `The task ${taskName} was updated successfully.`
    });
};