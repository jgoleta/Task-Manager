import User from '../models/User.js';

const RegisterUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
}

const authUser = async (username) => {
    return
}

export default { RegisterUser };