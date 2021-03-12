
import { ag } from '../../attribute-groups';

PType({
    name: 'Chair',
    key: 'chair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});