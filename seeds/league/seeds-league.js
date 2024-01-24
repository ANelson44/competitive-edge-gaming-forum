const { User, Post, Game } = require('../../models');

const seedLeague = async () => {
    // seed users
    const users = await User.bulkCreate([
        { username: 'User5', email: 'User5@example.com', password: 'password1'},
        { username: 'User6', email: 'User6@example.com', password: 'password2'},
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