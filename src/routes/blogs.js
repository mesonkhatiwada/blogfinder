import express from 'express';
import register from '../controller/register.js';
import login from '../controller/login.js';

const router = express.Router();

router.post('/login', login);
router.post('/register',register);

export default router;