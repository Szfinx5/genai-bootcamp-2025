import { Word } from '../models/word';

const words = [
    { id: 1, Tagalog: 'Araw', english: 'Sun', meaning: 'The star at the center of the solar system' },
    { id: 2, Tagalog: 'Buwan', english: 'Moon', meaning: 'The natural satellite of the Earth' },
    { id: 3, Tagalog: 'Tala', english: 'Star', meaning: 'A luminous point in the night sky' },
    { id: 100, Tagalog: 'Puno', english: 'Tree', meaning: 'A perennial plant with an elongated stem' }
];

export const seedWords = async () => {
    try {
        await Word.bulkCreate(words);
        console.log('Words have been seeded successfully.');
    } catch (error) {
        console.error('Error seeding words:', error);
    }
};

seedWords();
