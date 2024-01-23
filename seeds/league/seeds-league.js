const { User, Post, Game } = require('../../models');

const seedLeague = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User1', email: 'User1@example.com', password: 'password1'},
        { username: 'User2', email: 'User2@example.com', password: 'password2'},
    ]);

    // seed game
    const leagueOfLegends = await Game.create({ name: 'League of Legends' });

    //seed example posts
    const posts = await Post.bulkCreate([
        {
            title: 'Favorite legend',
            content: 'Which is your favorite legend?',
            user_id: users[0].id,
            game_id: leagueOfLegends.id,
        },

        {
            title: 'Favorite attacker',
            content: 'Which legend is your favorite attacker?',
            user_id: users[1].id,
            game_id: leagueOfLegends.id,
        },

        {
            title: 'Favorite tank',
            content: 'Which legend is your favorite tank?',
            user_id: users[1].id,
            game_id: leagueOfLegends.id,
        },
    ]);

    console.log('League of Legends seeded successfully.');
};

module.exports = seedLeague;