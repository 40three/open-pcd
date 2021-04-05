
import { ag } from '../../attribute-groups';

PType({
    name: 'Filing cabinet',
    key: 'filingcabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});