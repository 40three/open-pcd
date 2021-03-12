
import { ag } from '../../attribute-groups';

PType({
    name: 'Bar table',
    key: 'bartable',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});