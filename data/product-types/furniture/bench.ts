
import { ag } from '../../attribute-groups';

PType({
    name: 'Bench',
    key: 'bench',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});