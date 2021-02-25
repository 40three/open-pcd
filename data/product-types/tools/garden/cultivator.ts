
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cultivator',
    key: 'cultivator',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});