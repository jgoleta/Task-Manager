
export const ValidateLogin = (req, res, next) => {
    const { username, password} = req.body;
    if (!username || !password ) {
        return res.status(400).json({ error: "Username & password are required." });
    }
    next();
};

export const ValidateRegister = (req, res, next) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({ error: "Username, password, and role are required." });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long." });
    }   
    next();
};