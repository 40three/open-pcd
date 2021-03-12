
import { ag } from '../../attribute-groups';

PType({
    name: 'Stool',
    key: 'stool',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});