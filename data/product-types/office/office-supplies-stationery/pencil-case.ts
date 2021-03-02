
import { ag } from '../../../attribute-groups';

PType({
    name: 'Pencil case',
    key: 'pencilcase',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});