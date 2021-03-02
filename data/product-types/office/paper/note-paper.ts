
import { ag } from '../../../attribute-groups';

PType({
    name: 'Note paper',
    key: 'notepaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});