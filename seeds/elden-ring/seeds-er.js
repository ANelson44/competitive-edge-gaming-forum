const { User, Post, Game } = require('../../models');

const seedEldenRing = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User3', email: 'User3@example.com', password: 'password1'},
        { username: 'User4', email: 'User4@example.com', password: 'password2'},
    ]);

    // seed game
    const eldenRing = await Game.create({ name: 'Elden Ring' });

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Thoughts on Elden ring',
            content: 'What are your thoughts on Elden Ring?',
            userId: users[0].id,
            gameId: eldenRing.id,
        },

        {
            title: 'Favorite weapon',
            content: 'Which is your favorite weapon, spell or incantation?',
            userId: users[1].id,
            gameId: eldenRing.id,
        },

        {
            title: 'Favorite area/ boss',
            content: 'Which is your favorite region or boss?',
            userId: users[0].id,
            gameId: eldenRing.id,
        }
    ]);

    console.log('Elden Ring seeded successfully.');
};

module.exports = seedEldenRing;
