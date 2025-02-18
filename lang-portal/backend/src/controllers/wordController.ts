import { Request, Response } from 'express';
import { WordService } from '../services/wordService';

export class WordController {
    static async getAllWords(req: Request, res: Response) {
        const words = await WordService.getAllWords();
        res.json(words);
    }

    static async addWord(req: Request, res: Response) {
        const word = await WordService.addWord(req.body);
        res.json(word);
    }

    static async getWordById(req: Request, res: Response) {
        const word = await WordService.getWordById(Number(req.params.id));
        res.json(word);
    }
}
