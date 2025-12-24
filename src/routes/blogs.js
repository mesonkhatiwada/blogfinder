import express from 'express';
import register from '../controller/register.js';
import login from '../controller/login.js';
import uploadBlog from '../controller/uploadBlog.js';

const router = express.Router();

router.post('/login', login);
router.post('/register',register); // this is the path of the register
router.post('/blogs',uploadBlog);

export default router;
