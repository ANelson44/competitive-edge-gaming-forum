const { User, Post, Game } = require('../../models');

const seedCod = async () => {
    //seed users
    const users = await User.bulkCreate([
        { username: 'User1', email: 'User1@example.com', password: 'password1' },
        { username: 'User2', email: 'User2@example.com', password: 'password2'},
    ]);

    // seed game
    const callOfDuty = await Game.create({ name: 'Call of Duty'});

    // seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Favorite Call of Duty?',
            content: 'Which of the Call of Duty games has been your favorite?',
            user_id: users[0].id,
            game_id: callOfDuty.id,
        },

        {
            title: 'Best Warzone loadout',
            content: 'What is the best loadout in Warzone in your opinion?',
            user_id: users[1].id,
            game_id: callOfDuty.id,
        },
    ]);

    console.log('Call of Duty seeded successfully.');
};

module.exports = seedCod;
