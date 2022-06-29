import express from 'express';

import { signin, signup, home } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', home)

export default router;