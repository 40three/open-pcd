
import { ag } from '../../attribute-groups';

PType({
    name: 'Wing chair',
    key: 'wingchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});