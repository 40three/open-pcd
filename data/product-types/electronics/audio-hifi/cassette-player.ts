
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cassette player',
    key: 'cassettePlayer',
    definitionUrl: 'https://en.wikipedia.org/wiki/Cassette_deck',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});