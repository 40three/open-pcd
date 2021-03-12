
import { ag } from '../../attribute-groups';

PType({
    name: 'Mattress topper',
    key: 'mattresstopper',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});