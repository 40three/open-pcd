
import { ag } from '../../attribute-groups';

PType({
    name: 'Lounge',
    key: 'lounge',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});