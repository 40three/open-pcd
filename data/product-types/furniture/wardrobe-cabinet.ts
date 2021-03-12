
import { ag } from '../../attribute-groups';

PType({
    name: 'Wardrobe cabinet',
    key: 'wardrobecabinet',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});