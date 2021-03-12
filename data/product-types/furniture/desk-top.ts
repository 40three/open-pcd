
import { ag } from '../../attribute-groups';

PType({
    name: 'Desk top',
    key: 'desktop',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});