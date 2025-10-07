export const ValidateTask = (req, res, next) => {
    const { title, description, createdBy } = req.body;
    if (!title || !description || !createdBy) {
        return res.status(400).json({ error: "Title, description, and createdBy are required." });
    }
    next();
};