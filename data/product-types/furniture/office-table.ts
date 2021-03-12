
import { ag } from '../../attribute-groups';

PType({
    name: 'Office table',
    key: 'officetable',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});