
import { ag } from '../../attribute-groups';

PType({
    name: 'Seat cushion',
    key: 'seatcushion',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});