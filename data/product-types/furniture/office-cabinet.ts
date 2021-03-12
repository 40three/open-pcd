
import { ag } from '../../attribute-groups';

PType({
    name: 'Office cabinet',
    key: 'officecabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});