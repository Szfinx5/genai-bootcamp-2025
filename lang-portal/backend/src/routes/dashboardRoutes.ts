import { Router } from 'express';
import { DashboardController } from '../controllers/dashboardController';

const router = Router();

router.get('/dashboard/last_study_session', DashboardController.getLastStudySession);
router.get('/dashboard/study_progress', DashboardController.getStudyProgress);
router.get('/dashboard/quick-stats', DashboardController.getQuickStats);

export default router;
