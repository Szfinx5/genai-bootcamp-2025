import { Router } from 'express';
import { StudySessionController } from '../controllers/studySessionController';

const router = Router();

router.get('/study-sessions', StudySessionController.getAllStudySessions);
router.post('/study-sessions', StudySessionController.addStudySession);
router.get('/study-sessions/:id', StudySessionController.getStudySessionById);
router.post('/reset_history', StudySessionController.resetHistory);
router.post('/full_reset', StudySessionController.fullReset);
router.post('/study_sessions/:id/words/:word_id/review', StudySessionController.reviewWord);

export default router;
