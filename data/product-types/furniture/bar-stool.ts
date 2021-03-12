
import { ag } from '../../attribute-groups';

PType({
    name: 'Bar stool',
    key: 'barstool',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});