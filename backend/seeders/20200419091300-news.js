module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('News', [
      {
        title: 'Elbrus: the saving one leopard',
        description: `There are 103 Amur leopards left in the wild. The average area of the back of this
        animal is 0.4 m2, that is, the entire wild population of the Earth will fit into a small two-room
        apartment. And 50 years ago, they were 3 times less. Each of the spotted hundreds is the result of
        the careful care of dozens of people: scientists, veterinarians, rescuers, organizers, and educators.
        Now imagine that one careless driver crashes into the world's rarest cat. 
        Meeting with humanity
        Such accidents have occurred more than once. Leo 11M Meamur died on the spot. Leo 8F Killie managed to
        recover and escape. She was later seen healthy on camera traps. And Leo 131M Elbrus was not lucky. He
        survived, but was severely injured. Our hero was found on March 3, 2019 near death in the forest and
        taken to the rehabilitation Center for tigers and other rare animals (mroo "center "Tiger" in Vladivostok).`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  },
};
