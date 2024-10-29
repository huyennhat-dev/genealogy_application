/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Router } from 'express';
import authRoutes from './auth.routes';
import tribeRoutes from './tribe.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tribe', tribeRoutes);

export default router;
