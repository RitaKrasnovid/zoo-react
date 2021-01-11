module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('News', [
      {
        title: 'Happy New year!',
        description: 'We wish you more dancing in New Year!',
        videoId: '-RAXa7lcR3o',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
      {
        title: 'FIVE IN THE BURROWS: REPLENISHMENT OF HUMBOLDT PENGUINS IN THE MOSCOW ZOO',
        description: `The first baby penguin was born on January 8. After him, the other four Chicks hatched,
          the youngest of which is now six weeks old. So far, the penguins almost all the time hide in special
          burrows-depressions in the rocks, which are guarded by their caring parents in turn. However, from time
          to time, the Chicks look out and look around curiously. In the next two weeks, when they change their
          down to a nestling plumage that allows them to stay on the water, the penguins will become much more
          independent and begin to master the water element. To date, the Moscow zoo contains the largest breeding
          group of Humboldt penguins in Russia. Together with the Chicks that hatched this year, the number of its
          members reached 35 individuals! This species of penguin has been kept in the zoo since 1997, and offspring
          from birds have been regularly obtained since the early 2000s. Grown-up Chicks are sent to the leading domestic
          and European zoos. For example, penguins born in the Moscow zoo live in Izhevsk, Novosibirsk, Voronezh
          and many other zoos.
          The Humboldt penguin is listed In the international red list in the category "vulnerable". According
          to experts, the natural population does not exceed 32 thousand individuals. Habitats and nesting sites of
          birds are concentrated on the Western coast of Latin America from Peru to Argentina. Here, on the rocky shores
          washed by the waters of the Pacific ocean, birds breed their offspring and form colonies, numbering hundreds,
          and sometimes thousands of individuals. However, every year the number of species in nature continues to
          decline-primarily due to ocean pollution, as well as the deterioration of the food supply. The European
          population program, as well as the breeding books of the European and American associations of zoos and
          aquariums, are designed to save the species from extinction. The Moscow zoo has been actively involved in
          the creation of a stable and genetically diverse reserve population of Humboldt penguins for more than 20 years.
          "Now the penguins hatched in January are actively shedding, changing the down to a more dense plumage.
          Very soon they will start learning to swim, and at the age of six months will lead an independent life.
          So far, their parents take care of them: the father and mother take turns bringing their Chicks food -
          half-digested fish. As soon as the penguins start to come out of their burrows and get used to the enclosure,
          our ornithologists will begin to train them to take food on their own, as well as conduct developmental
          training with the Chicks. Although the Chicks have already got used to interacting with their keepers:
          they are regularly examined and weighed. And recently all the penguins were chipped. The birds did not
          worry at all during this important procedure, they were rather curious and they perceived everything
          that was happening as a game," said Svetlana Akulova, General Director of the Moscow zoo.
          Guests of the zoo can watch the growing Chicks in the pavilion "house of birds". So far, it is not easy
          to see the penguins: thanks to their gray plumage, they deftly disguise themselves among the rocks. However,
          in just a couple of weeks, when the penguins begin to leave their burrows, they can be seen in all their glory.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  },
};
