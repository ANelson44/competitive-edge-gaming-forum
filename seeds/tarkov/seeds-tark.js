const { User, Post, Game } = require('../../models');

const seedTarkov = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User7', email: 'User7@example.com', password: 'password1'},
        { username: 'User8', email: 'User8@example.com', password: 'password2'},
    ]);

    // seed game
    const tarkov = await Game.create({ name: 'Escape from Tarkov '});

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Favorite map',
            content: 'Which is your favorite map?',
            userId: users[0].id,
            gameId: tarkov.id,
        },

        {
            title: 'Thoughts on wipe',
            content: 'What are your thoughts on the changes this wipe?',
            userId: users[1].id,
            gameId: tarkov.id,
        },

        {
            title: 'Arena thoughts',
            content: 'What are your thoughts on Arena?',
            userId: users[0].id,
            gameId: tarkov.id,
        },
    ]);

    console.log('Escape from Tarkov seeded successfully.');
};

module.exports = seedTarkov;
