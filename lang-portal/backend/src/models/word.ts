import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../utils/database';

export const Word = sequelize.define('Word', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Tagalog: {
        type: DataTypes.STRING,
        allowNull: false
    },
    english: {
        type: DataTypes.STRING,
        allowNull: false
    },
    meaning: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
