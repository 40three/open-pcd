
import { ag } from '../../attribute-groups';

PType({
    name: 'Reception counter',
    key: 'receptioncounter',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});