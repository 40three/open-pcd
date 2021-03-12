
import { ag } from '../../attribute-groups';

PType({
    name: 'Garden cabinet',
    key: 'gardencabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});