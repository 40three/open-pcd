
import { ag } from '../../attribute-groups';

PType({
    name: 'Worktop',
    key: 'worktop',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});