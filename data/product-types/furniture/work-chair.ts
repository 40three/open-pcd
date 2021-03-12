
import { ag } from '../../attribute-groups';

PType({
    name: 'Work chair',
    key: 'workchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});