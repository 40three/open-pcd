
import { ag } from '../../attribute-groups';

PType({
    name: 'Tall cabinet',
    key: 'tallcabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});