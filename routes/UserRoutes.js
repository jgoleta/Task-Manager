import express from 'express';
import { getUser, createUser } from '../controllers/UserController.js';
import { ValidateRegister } from '../validators/UserValidator.js'; 

const router = express.Router();