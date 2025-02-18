import request from 'supertest';
import app from '../src/app';

describe('Word Controller', () => {
    it('should get all words', async () => {
        const res = await request(app).get('/api/words');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should add a new word', async () => {
        const res = await request(app)
            .post('/api/words')
            .send({ Tagalog: 'salamat', english: 'thank you', meaning: 'expression of gratitude' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });
});
