const { User, Post, Game } = require('../../models');

const seedEldenRing = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User1', email: 'User1@example.com', password: 'password1'},
        { username: 'User2', email: 'User2@example.com', password: 'password2'},
    ]);

    // seed game
    const eldenRing = await Game.create({ name: 'Elden Ring' });

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Thoughts on Elden ring',
            content: 'What are your thoughts on Elden Ring?',
            user_id: users[0].id,
            game_id: eldenRing.id,
        },

        {
            title: 'Favorite weapon',
            content: 'Which is your favorite weapon, spell or incantation?',
            user_id: users[1].id,
            game_id: eldenRing.id,
        },

        {
            title: 'Favorite area/ boss',
            content: 'Which is your favorite region or boss?',
            user_id: users[0].id,
            game_id: eldenRing.id,
        }
    ]);

    console.log('Elden Ring seeded successfully.');
};

module.exports = seedEldenRing;
