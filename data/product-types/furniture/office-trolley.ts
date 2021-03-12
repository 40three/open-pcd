
import { ag } from '../../attribute-groups';

PType({
    name: 'Office trolley',
    key: 'officetrolley',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});