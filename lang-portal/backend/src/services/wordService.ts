import { Word } from '../models/word';

export class WordService {
    static async getAllWords() {
        return await Word.findAll();
    }

    static async addWord(wordData: any) {
        return await Word.create(wordData);
    }

    static async getWordById(id: number) {
        return await Word.findByPk(id);
    }
}
