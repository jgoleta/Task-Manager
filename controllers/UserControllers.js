import User from "../models/User";
import { signIn, signUp } from "../services/UserService";

const RegisterUser = async (req, res) => {
    try {
        const userData = req.body
        const savedUser = await signUp(userData);
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({msg: err.msg})
    }
}

const LoginUser = async (req, res) => {
    try {
        const userData = req.body
        const user = await signIn(userData);
        res.status(200).json({msg: "Login Successful"})
    } catch (err) {
        res.status(500).json({msg: err.msg})
    }
}

export default {RegisterUser, LoginUser}