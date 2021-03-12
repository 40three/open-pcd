
import { ag } from '../../attribute-groups';

PType({
    name: 'Kitchen counter',
    key: 'kitchencounter',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});