const seedCod = require('./seeds/cod/seeds-cod');
const seedEldenRing = require('./seeds/elden-ring/seeds-er');
const seedLeague = require('./league/seeds-league');
const seedTarkov = require('./seeds/tarkov/seeds-tarkov');
const seedValorant = require('./seeds/valorant/seeds-valorant');

const seedAllGames = async () => {
    console.log('Seeding COD');
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
