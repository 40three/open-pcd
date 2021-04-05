
import { ag } from '../../attribute-groups';

PType({
    name: 'Garden table',
    key: 'gardentable',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});