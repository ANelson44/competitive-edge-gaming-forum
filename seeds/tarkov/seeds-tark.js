const { User, Post, Game } = require('../../models');

const seedTarkov = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User1', email: 'User1@example.com', password: 'password1'},
        { username: 'User2', email: 'User2@example.com', password: 'password2'},
    ]);

    // seed game
    const tarkov = await Game.create({ name: 'Escape from Tarkov '});

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Favorite map',
            content: 'Which is your favorite map?',
            user_id: users[0].id,
            game_id: tarkov.id,
        },

        {
            title: 'Thoughts on wipe',
            content: 'What are your thoughts on the changes this wipe?',
            user_id: users[1].id,
            game_id: tarkov.id,
        },

        {
            title: 'Arena thoughts',
            content: 'What are your thoughts on Arena?',
            user_id: users[0].id,
            game_id: tarkov.id,
        },
    ]);

    console.log('Escape from Tarkov seeded successfully.');
};

module.exports = seedTarkov;
