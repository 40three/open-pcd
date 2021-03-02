
import { ag } from '../../../attribute-groups';

PType({
    name: 'Whiteboard',
    key: 'whiteboard',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});