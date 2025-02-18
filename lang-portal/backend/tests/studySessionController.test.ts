import request from 'supertest';
import app from '../src/app';

describe('Study Session Controller', () => {
    it('should get all study sessions', async () => {
        const res = await request(app).get('/api/study-sessions');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should add a new study session', async () => {
        const res = await request(app)
            .post('/api/study-sessions')
            .send({ result: 80 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });
});
