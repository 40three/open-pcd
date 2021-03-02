
import { ag } from '../../../attribute-groups';

PType({
    name: 'Filing box',
    key: 'filingbox',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});