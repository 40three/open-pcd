
import { ag } from '../../../attribute-groups';

PType({
    name: 'Gel pen',
    key: 'gelpen',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});