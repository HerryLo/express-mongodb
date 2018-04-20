import express from 'express'
import User from '../controller/users'

const router = express.Router();

router.get('/login', User.login);
router.get('/register', User.register);

export default router