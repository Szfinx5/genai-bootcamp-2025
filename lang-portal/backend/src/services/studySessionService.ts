import { StudySession } from '../models/studySession';
import { WordReviewItem } from '../models/wordReviewItem';
import { Word } from '../models/word';

export class StudySessionService {
    static async getAllStudySessions() {
        return await StudySession.findAll();
    }

    static async addStudySession(sessionData: any) {
        return await StudySession.create(sessionData);
    }

    static async getStudySessionById(id: number) {
        return await StudySession.findByPk(id);
    }

    static async resetHistory() {
        await StudySession.destroy({ where: {} });
        await WordReviewItem.destroy({ where: {} });
    }

    static async fullReset() {
        await this.resetHistory();
        // Add any additional reset logic here
    }

    static async reviewWord(studySessionId: number, wordId: number, correct: boolean) {
        return await WordReviewItem.create({
            study_session_id: studySessionId,
            word_id: wordId,
            correct,
            created_at: new Date()
        });
    }

    static async getLastStudySession() {
        return await StudySession.findOne({
            order: [['created_at', 'DESC']]
        });
    }

    static async getStudyProgress() {
        const totalWordsStudied = await WordReviewItem.count();
        const totalAvailableWords = await Word.count();
        return {
            total_words_studied: totalWordsStudied,
            total_available_words: totalAvailableWords
        };
    }

    static async getQuickStats() {
        const totalStudySessions = await StudySession.count();
        const totalWordsStudied = await WordReviewItem.count();
        const successRate = await WordReviewItem.count({ where: { correct: true } }) / totalWordsStudied * 100;
        const studyStreakDays = await this.calculateStudyStreakDays();
        return {
            success_rate: successRate,
            total_study_sessions: totalStudySessions,
            study_streak_days: studyStreakDays
        };
    }

    static async calculateStudyStreakDays() {
        // Implement logic to calculate study streak days
        return 4; // Placeholder value
    }
}
