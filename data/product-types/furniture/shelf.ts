
import { ag } from '../../attribute-groups';

PType({
    name: 'Shelf',
    key: 'shelf',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});