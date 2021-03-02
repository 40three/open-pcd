
import { ag } from '../../../attribute-groups';

PType({
    name: 'Desk pad',
    key: 'deskpad',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});