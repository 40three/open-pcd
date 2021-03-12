
import { ag } from '../../attribute-groups';

PType({
    name: 'Desk',
    key: 'desk',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});