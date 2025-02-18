import { Request, Response } from 'express';
import { StudySessionService } from '../services/studySessionService';

export class StudySessionController {
    static async getAllStudySessions(req: Request, res: Response) {
        const sessions = await StudySessionService.getAllStudySessions();
        res.json(sessions);
    }

    static async addStudySession(req: Request, res: Response) {
        const session = await StudySessionService.addStudySession(req.body);
        res.json(session);
    }

    static async getStudySessionById(req: Request, res: Response) {
        const session = await StudySessionService.getStudySessionById(Number(req.params.id));
        res.json(session);
    }

    static async resetHistory(req: Request, res: Response) {
        await StudySessionService.resetHistory();
        res.json({
            success: true,
            message: "Study history has been reset"
        });
    }

    static async fullReset(req: Request, res: Response) {
        await StudySessionService.fullReset();
        res.json({
            success: true,
            message: "System has been fully reset"
        });
    }

    static async reviewWord(req: Request, res: Response) {
        const review = await StudySessionService.reviewWord(Number(req.params.id), Number(req.params.word_id), req.body.correct);
        res.json(review);
    }
}
