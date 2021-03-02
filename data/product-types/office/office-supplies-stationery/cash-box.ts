
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cash box',
    key: 'cashbox',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});