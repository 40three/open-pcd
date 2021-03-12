
import { ag } from '../../attribute-groups';

PType({
    name: 'Seat chest',
    key: 'seatchest',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});