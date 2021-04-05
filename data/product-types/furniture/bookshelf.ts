
import { ag } from '../../attribute-groups';

PType({
    name: 'Bookshelf',
    key: 'bookshelf',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});