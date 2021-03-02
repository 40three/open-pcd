
import { ag } from '../../../attribute-groups';

PType({
    name: 'Sticky note',
    key: 'stickynote',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});