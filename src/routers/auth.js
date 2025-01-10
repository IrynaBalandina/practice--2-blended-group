import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registrUserController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/register', ctrlWrapper(registrUserController));
export default authRouter;
