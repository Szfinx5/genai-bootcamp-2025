import express from 'express';
import wordRoutes from './routes/wordRoutes';
import studySessionRoutes from './routes/studySessionRoutes';
import { sequelize } from './utils/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', wordRoutes);
app.use('/api', studySessionRoutes);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    });

export default app;