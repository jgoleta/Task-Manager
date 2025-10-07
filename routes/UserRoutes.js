import express from 'express';
import { RegisterUser, loginUser } from '../controllers/UserController.js';
import { ValidateLogin, ValidateRegister } from '../validators/UserValidator.js'; 

const router = express.Router();

router.post('/register', ValidateRegister, RegisterUser);
router.post ('/login', ValidateLogin, loginUser);