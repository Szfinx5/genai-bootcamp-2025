import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../utils/database';

export const WordReviewItem = sequelize.define('WordReviewItem', {
    word_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    study_session_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});
