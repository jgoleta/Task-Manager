import express from 'express';
import { getUser, createUser } from '../controllers/UserController.js';
import { ValidateLogin, ValidateRegister } from '../validators/UserValidator.js'; 
import { RegisterUser, loginUser } from '../services/UserService.js'

const router = express.Router();

router.post('/register', ValidateRegister, RegisterUser);
router.post ('/login', ValidateLogin, loginUser);