
import { ag } from '../../attribute-groups';

PType({
    name: 'Underbed',
    key: 'underbed',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});