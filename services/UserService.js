import bcrypt from "bcrypt";
import User from '../models/User.js';

const RegisterUser = async (userData) => {
    try {
        const {

            username,
            password

        } = userData
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: passwordHash
        });

        return await newUser.save();
    } catch (error) {
        res.status(500).json({message: err.message});
    }
}

const loginUser = async (username) => {
    try {
        
    } catch (error) {
        
    }
    return
}

export default { RegisterUser, loginUser };