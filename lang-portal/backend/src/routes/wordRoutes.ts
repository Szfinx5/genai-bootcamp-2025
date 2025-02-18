import { Router } from 'express';
import { WordController } from '../controllers/wordController';

const router = Router();

router.get('/words', WordController.getAllWords);
router.post('/words', WordController.addWord);
router.get('/words/:id', WordController.getWordById);

export default router;
