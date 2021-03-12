
import { ag } from '../../attribute-groups';

PType({
    name: 'Cover for furniture',
    key: 'coverforfurniture',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});