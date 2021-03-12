
import { ag } from '../../attribute-groups';

PType({
    name: 'Dining table',
    key: 'diningtable',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});