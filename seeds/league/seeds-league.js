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
            title: 'Favorite champion',
            content: 'Which is your favorite champion?',
            user_id: users[0].id,
            game_id: leagueOfLegends.id,
        },

        {
            title: 'Favorite gamemode',
            content: 'Which gamemode is your favorite?',
            user_id: users[1].id,
            game_id: leagueOfLegends.id,
        },

        {
            title: 'Favorite team',
            content: 'Which LOL esports team is your favorite?',
            user_id: users[1].id,
            game_id: leagueOfLegends.id,
        },
    ]);

    console.log('League of Legends seeded successfully.');
};

module.exports = seedLeague;