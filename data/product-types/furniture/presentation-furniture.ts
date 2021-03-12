
import { ag } from '../../attribute-groups';

PType({
    name: 'Presentation furniture',
    key: 'presentationfurniture',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});