import express from 'express';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All booking routes require authentication
router.use(protect);

// Placeholder routes - to be implemented
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Bookings route - to be implemented',
    data: { bookings: [] }
  });
});

export default router;
