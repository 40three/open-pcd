
import { ag } from '../../attribute-groups';

PType({
    name: 'Bunk bed',
    key: 'bunkbed',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});