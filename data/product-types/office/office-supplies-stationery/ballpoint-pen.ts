
import { ag } from '../../../attribute-groups';

PType({
    name: 'Ballpoint pen',
    key: 'ballpointpen',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});