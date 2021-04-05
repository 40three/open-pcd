
import { ag } from '../../attribute-groups';

PType({
    name: 'Corner desk',
    key: 'cornerdesk',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});