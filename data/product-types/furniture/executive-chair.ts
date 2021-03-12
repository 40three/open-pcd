
import { ag } from '../../attribute-groups';

PType({
    name: 'Executive chair',
    key: 'executivechair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});