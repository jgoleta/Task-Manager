import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User.js';

const signUp = async (userData) => {
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

const signIn = async (user, res) => {
    try {
        const {username, password } = user;
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({msg: "Invalid Credentials"});

        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });

    } catch (error) {
        res.status(500).json({ error: err.message});

    }
    return
}

export default { signIn, signUp };