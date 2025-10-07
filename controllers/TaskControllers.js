import Task from '../models/Task.js';

export const CreateTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const UpdateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ); 
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found." });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const DeleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(
            req.params.id
        );
        if (!deletedTask) {
            res.status(404).json({ message: "Task not found." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

