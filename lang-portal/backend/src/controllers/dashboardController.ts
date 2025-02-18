import { Request, Response } from 'express';
import { StudySessionService } from '../services/studySessionService';

export class DashboardController {
    static async getLastStudySession(req: Request, res: Response) {
        const session = await StudySessionService.getLastStudySession();
        res.json(session);
    }

    static async getStudyProgress(req: Request, res: Response) {
        const progress = await StudySessionService.getStudyProgress();
        res.json(progress);
    }

    static async getQuickStats(req: Request, res: Response) {
        const stats = await StudySessionService.getQuickStats();
        res.json(stats);
    }
}
