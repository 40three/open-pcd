
import { ag } from '../../../attribute-groups';

PType({
    name: 'Home theater system',
    key: 'homeTheaterSystem',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});