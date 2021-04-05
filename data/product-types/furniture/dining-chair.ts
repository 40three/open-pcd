
import { ag } from '../../attribute-groups';

PType({
    name: 'Dining chair',
    key: 'diningchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});