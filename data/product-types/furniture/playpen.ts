
import { ag } from '../../attribute-groups';

PType({
    name: 'Playpen',
    key: 'playpen',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});