
import { ag } from '../../../attribute-groups';

PType({
    name: 'Satellite dish',
    key: 'satelliteDish',
    definitionUrl: 'https://en.wikipedia.org/wiki/Satellite_dish',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});