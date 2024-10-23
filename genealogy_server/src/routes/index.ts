import { Router } from 'express';
import authRoutes from './auth.routes';
// Nhập khẩu các routes khác

const router = Router();

// Sử dụng các route
router.use('/auth', authRoutes);
// Sử dụng các routes khác

export default router;
