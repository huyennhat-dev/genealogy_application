/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Router } from 'express';
import authRoutes from './auth.routes';
import tribeRoutes from './tribe.routes';
import messageRoutes from './message.routes';
import eventRoutes from './event.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tribe', tribeRoutes);
router.use('/message', messageRoutes);
router.use('/event', eventRoutes);

export default router;
