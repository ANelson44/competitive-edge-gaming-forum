const seedCod = require('./cod/seeds-cod');
const seedEldenRing = require('./elden-ring/seeds-er');
const seedLeague = require('./league/seeds-league');
const seedTarkov = require('./tarkov/seeds-tark');
const seedValorant = require('./valorant/seeds-val');

const sequelize = require('../config/connection');

const seedAllGames = async () => {
    console.log('Seeding COD');

    await sequelize.sync({ force: true });

    await seedCod();

    console.log('Seeding Elden Ring');
    await seedEldenRing();

    console.log('Seeding League of Legends');
    await seedLeague();

    console.log('Seeding Tarkov');
    await seedTarkov();

    console.log('Seeding Valorant');
    await seedValorant();

    console.log('All games seeded successfully');
}

seedAllGames();
