
import { ag } from '../../../attribute-groups';

PType({
    name: 'Magnetic tape',
    key: 'magnetictape',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});