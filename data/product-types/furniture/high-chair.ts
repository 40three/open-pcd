
import { ag } from '../../attribute-groups';

PType({
    name: 'High Chair',
    key: 'highchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});