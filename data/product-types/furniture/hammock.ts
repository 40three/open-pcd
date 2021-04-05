
import { ag } from '../../attribute-groups';

PType({
    name: 'Hammock',
    key: 'hammock',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});