
import { ag } from '../../attribute-groups';

PType({
    name: 'Awning',
    key: 'awning',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});