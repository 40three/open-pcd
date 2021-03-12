
import { ag } from '../../attribute-groups';

PType({
    name: 'Steel cabinet',
    key: 'steelcabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});