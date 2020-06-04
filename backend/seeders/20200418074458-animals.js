module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Animals', [
      {
        title: 'Tiger',
        order: 'Mammal',
        family: 'Felidae',
        description: `The tiger (Panthera tigris) is the largest cat species and a member of the genus Panthera.
        It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside.
        It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial
        and generally a solitary but social predator, requiring large contiguous areas of habitat, which
        support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother
        for about two years, before they become independent and leave their mother's home range to establish their own.
        The tiger once ranged widely from the Eastern Anatolia Region in the west to the Amur River basin, and in the
        south from the foothills of the Himalayas to Bali in the Sunda islands. Since the early 20th century, tiger
        populations have lost at least 93% of their historic range and have been extirpated in Western and Central Asia,
        from the islands of Java and Bali, and in large areas of Southeast and South Asia and China. Today's tiger range
        is fragmented, stretching from Siberian temperate forests to subtropical and tropical forests on the Indian
        subcontinent and Sumatra.
        The tiger is listed as Endangered on the IUCN Red List since 1986. As of 2015, the global wild tiger population
        was estimated to number between 3,062 and 3,948 mature individuals, down from around 100,000 at the start of the
        20th century, with most remaining populations occurring in small pockets isolated from each other. Major reasons
        for population decline include habitat destruction, habitat fragmentation and poaching. This, coupled with the fact
        that it lives in some of the more densely populated places on Earth, has caused significant conflicts with humans.
        The tiger is among the most recognisable and popular of the world's charismatic megafauna. It featured prominently
        in ancient mythology and folklore and continues to be depicted in modern films and literature, appearing on many
        flags, coats of arms and as mascots for sporting teams. The tiger is the national animal of India, Bangladesh,
        Malaysia and South Korea.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Giraffe',
        order: 'Mammal',
        family: 'Giraffidae',
        description: `The giraffe (Giraffa) is an African artiodactyl mammal, the tallest living terrestrial animal and the
        largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies.
        However, the existence of up to eight extant giraffe species has been described, based upon research into the
        mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other species are extinct,
        prehistoric species known from fossils.
        The giraffe's chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones,
        and its distinctive coat patterns. It is classified under the family Giraffidae, along with its closest extant
        relative, the okapi. Its scattered range extends from Chad in the north to South Africa in the south, and from
        Niger in the west to Somalia in the east. Giraffes usually inhabit savannahs and woodlands. Their food source is
        leaves, fruits and flowers of woody plants, primarily acacia species, which they browse at heights most other
        herbivores cannot reach. They may be preyed on by lions, leopards, spotted hyenas and African wild dogs. Giraffes
        live in herds of related females and their offspring, or bachelor herds of unrelated adult males, but are gregarious
        and may gather in large aggregations. Males establish social hierarchies through "necking", which are combat bouts
        where the neck is used as a weapon. Dominant males gain mating access to females, which bear the sole responsibility
        for raising the young.
        The giraffe has intrigued various cultures, both ancient and modern, for its peculiar appearance, and has often been
        featured in paintings, books, and cartoons. It is classified by the International Union for Conservation of Nature
        as vulnerable to extinction, and has been extirpated from many parts of its former range. Giraffes are still found
        in numerous national parks and game reserves but estimates as of 2016 indicate that there are approximately 97,500
        members of Giraffa in the wild. More than 1,600 were kept in zoos in 2010.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Macaque',
        order: 'Mammal',
        family: 'Cercopithecidae',
        description: `The macaques constitute a genus (Macaca) of gregarious Old World monkeys of the subfamily Cercopithecinae.
        The 23 species of macaques inhabit ranges throughout Asia, North Africa, and (in one instance) Gibraltar. Macaques 
        are principally frugivorous, although their diet also includes seeds, leaves, flowers, and tree bark. Some species, 
        such as the crab-eating macaque, subsist on a diet of invertebrates and occasionally small vertebrates. On average,
        southern pig-tailed macaques in Malaysia eat about 70 large rats each per year. All macaque social groups are
        matriarchal, arranged around dominant females.
        Macaques are found in a variety of habitats throughout the Asian continent and are highly adaptable. Certain species
        have learned to live with humans and have become invasive in some human-settled environments, such as the island of
        Mauritius and Silver Springs State Park in Florida. Macaques can be a threat to wildlife conservation as well as to
        human well-being via carrying transmittable and fatal diseases. Currently, invasive species of macaques are handled
        with several control methods.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Hummingbird',
        order: 'Bird',
        family: 'Trochilidae',
        description: `Hummingbirds are birds native to the Americas and constituting the biological family Trochilidae. They are
        the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length. The smallest extant bird species is the 5 cm
        (2.0 in) bee hummingbird, which weighs less than 2.0 g (0.07 oz).
        They are known as hummingbirds because of the humming sound created by their beating wings, which flap at high frequencies
        audible to humans. They hover in mid-air at rapid wing-flapping rates, which vary from around 12 beats per second in
        the largest species, to in excess of 80 in some of the smallest. Of those species that have been measured in wind tunnels,
        their top speeds exceed 15 m/s (54 km/h; 34 mph) and some species can dive at speeds in excess of 22 m/s (79 km/h; 49 mph).
        Hummingbirds have the highest mass-specific metabolic rate of any homeothermic animal. To conserve energy when food is scarce,
        and nightly when not foraging, they can go into torpor, a state similar to hibernation, slowing their metabolic rate
        to 1/15th of its normal rate.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Woodpecker',
        order: 'Bird',
        family: 'Picidae',
        description: `Woodpeckers are part of the family Picidae, a group of near-passerine birds that also consist of piculets, wrynecks,
        and sapsuckers. Members of this family are found worldwide, except for Australia, New Guinea, New Zealand, Madagascar,
        and the extreme polar regions. Most species live in forests or woodland habitats, although a few species are known that live
        in treeless areas, such as rocky hillsides and deserts, and the Gila woodpecker specialises in exploiting cacti.
        Members of this family are chiefly known for their characteristic behaviour. They mostly forage for insect prey on the
        trunks and branches of trees, and often communicate by drumming with their beak, producing a reverberatory sound that
        can be heard at some distance. Some species vary their diet with fruits, birds' eggs, small animals, and tree sap.
        They mostly nest and roost in holes that they excavate in tree trunks, and their abandoned holes are of importance
        to other cavity-nesting birds. They sometimes come into conflict with humans when they make holes in buildings or
        feed on fruit crops, but perform a useful service by their removal of insect pests on trees.
        The Picidae are one of nine living families in the order Piciformes, the others being barbets (comprising three families),
        toucans, toucan-barbets, and honeyguides which (along with woodpeckers) comprise the clade Pici, and the jacamars and puffbirds
        in the clade Galbuli. DNA sequencing has confirmed the sister relationships of these two groups. The family Picidae includes
        about 240 species arranged in 35 genera. Almost 20 species are threatened with extinction due to loss of habitat or habitat
        fragmentation, with one, the Bermuda flicker, being extinct and a further two possibly being so.
        A group of woodpeckers is called a "descent."`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Crucian carp',
        order: 'Fish',
        family: 'Cyprinidae',
        description: `The crucian carp (Carassius carassius) is a medium-sized member of the common carp family Cyprinidae.
        It occurs widely in northern European regions. The crucian carp is a widely distributed European species, its range
        spanning from England to Russia; it is found as far north as the Arctic Circle in the Scandinavian countries, and as
        far south as central France and the region of the Black Sea. Its habitat includes lakes, ponds, and slow-moving
        rivers. It has been established that the fish is native to England and not introduced.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Parrotfish',
        order: 'Fish',
        family: 'Scaridae',
        description: `Parrotfishes are a group of about 95 fish species regarded as a family (Scaridae), or a subfamily
        (Scarinae) of the wrasses. With about 95 species, this group's largest species richness is in the Indo-Pacific.
        They are found in coral reefs, rocky coasts, and seagrass beds, and can play a significant role in bioerosion.
        Parrotfish are named for their dentition, which is distinct from other fish, including other labrids. Their
        numerous teeth are arranged in a tightly packed mosaic on the external surface of their jaw bones, forming a
        parrot-like beak with which they rasp algae from coral and other rocky substrates (which contributes to the
        process of bioerosion).
        Maximum sizes vary within the family, with the majority of species reaching 30–50 cm (12–20 in) in length. However,
        a few species reach lengths in excess of 1 m (3 ft 3 in), and the green humphead parrotfish can reach up to 1.3 m
        (4 ft 3 in). The smallest species is the bluelip parrotfish (Cryptotomus roseus), which has a maximum size of 13 cm
        (5.1 in).`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Crocodile',
        order: 'Reptilia',
        family: 'Crocodylidae',
        description: `Crocodiles (subfamily Crocodylinae) or true crocodiles are large semiaquatic reptiles that live throughout
        the tropics in Africa, Asia, the Americas and Australia. Crocodylinae, all of whose members are considered true crocodiles,
        is classified as a biological subfamily. A broader sense of the term crocodile, Crocodylidae that includes Tomistoma, is not
        used in this article. The term crocodile here applies to only the species within the subfamily of Crocodylinae. The term is
        sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and
        caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae), and all other living and fossil Crocodylomorpha.
        Although they appear similar, crocodiles, alligators and the gharial belong to separate biological families. The gharial,
        with its narrow snout, is easier to distinguish, while morphological differences are more difficult to spot in crocodiles
        and alligators. The most obvious external differences are visible in the head, with crocodiles having narrower and longer
        heads, with a more V-shaped than a U-shaped snout compared to alligators and caimans. Another obvious trait is that the upper
        and lower jaws of the crocodiles are the same width, and the teeth in the lower jaw fall along the edge or outside the upper
        jaw when the mouth is closed; therefore, all teeth are visible, unlike an alligator, which possesses in the upper jaw small
        depressions into which the lower teeth fit. Also, when the crocodile's mouth is closed, the large fourth tooth in the lower
        jaw fits into a constriction in the upper jaw. For hard-to-distinguish specimens, the protruding tooth is the most reliable
        feature to define the species' family. Crocodiles have more webbing on the toes of the hind feet and can better tolerate
        saltwater due to specialized salt glands for filtering out salt, which are present, but non-functioning, in alligators.
        Another trait that separates crocodiles from other crocodilians is their much higher levels of aggression.
        Crocodile size, morphology, behaviour and ecology differ somewhat among species. However, they have many similarities
        in these areas as well. All crocodiles are semiaquatic and tend to congregate in freshwater habitats such as rivers,
        lakes, wetlands and sometimes in brackish water and saltwater. They are carnivorous animals, feeding mostly on vertebrates
        such as fish, reptiles, birds and mammals, and sometimes on invertebrates such as molluscs and crustaceans, depending on
        species and age. All crocodiles are tropical species that, unlike alligators, are very sensitive to cold. They separated
        from other crocodilians during the Eocene epoch, about 55 million years ago. Many species are at the risk of extinction,
        some being classified as critically endangered.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Animals', null, {});
  },
};

