
import { ag } from '../../attribute-groups';

PType({
    name: 'Computer desk',
    key: 'computerdesk',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});