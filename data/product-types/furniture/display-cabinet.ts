
import { ag } from '../../attribute-groups';

PType({
    name: 'Display cabinet',
    key: 'displaycabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});