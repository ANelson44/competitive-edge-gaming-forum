const { User, Post, Game } = require('../../models');

const seedValorant = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User9', email: 'User9@example.com', password: 'password1'},
        { username: 'User10', email: 'User10@example.com', password: 'password2'},
    ]);

    // seed game
    const valorant = await Game.create({ name: 'Valorant' });

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Favorite map',
            content: 'Which is your favorite map?',
            user_id: users[0].id,
            game_id: valorant.id,
        },

        {
            title: 'Favorite agent',
            content: 'Which is your favorite agent?',
            user_id: users[1].id,
            game_id: valorant.id,
        },
    ]);

    console.log('Valorant loaded successfully.');
};

module.exports = seedValorant;
