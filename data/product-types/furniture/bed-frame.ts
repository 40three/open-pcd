
import { ag } from '../../attribute-groups';

PType({
    name: 'Bed frame',
    key: 'bedframe',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});