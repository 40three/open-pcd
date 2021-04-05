
import { ag } from '../../attribute-groups';

PType({
    name: 'Container',
    key: 'container',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});