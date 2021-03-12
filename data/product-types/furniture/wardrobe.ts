
import { ag } from '../../attribute-groups';

PType({
    name: 'Wardrobe',
    key: 'wardrobe',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});