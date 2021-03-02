
import { ag } from '../../../attribute-groups';

PType({
    name: 'Letter pad',
    key: 'letterpad',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});