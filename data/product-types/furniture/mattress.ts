
import { ag } from '../../attribute-groups';

PType({
    name: 'Mattress',
    key: 'mattress',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});