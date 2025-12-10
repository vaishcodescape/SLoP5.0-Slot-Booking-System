import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All user routes require authentication
router.use(protect);

// Placeholder routes - to be implemented
router.get('/', authorize('super_admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Users route - to be implemented',
    data: { users: [] }
  });
});

export default router;
