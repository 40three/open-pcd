
import { ag } from '../../attribute-groups';

PType({
    name: 'Bed',
    key: 'bed',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});