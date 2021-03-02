
import { ag } from '../../../attribute-groups';

PType({
    name: 'Pen',
    key: 'pen',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});