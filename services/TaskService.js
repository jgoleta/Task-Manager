import Task from '../models/Task.js';
const CreateTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
}
const UpdateTask = async (taskId, updateData) => {
    return await Task.findByIdAndUpdate(taskId, updateData, { 
        new: true,
        runValidators: true
    });
}
const DeleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
}

export default { CreateTask, UpdateTask, DeleteTask };