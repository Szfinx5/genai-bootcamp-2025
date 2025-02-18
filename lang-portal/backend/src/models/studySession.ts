import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../utils/database';

export const StudySession = sequelize.define('StudySession', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
