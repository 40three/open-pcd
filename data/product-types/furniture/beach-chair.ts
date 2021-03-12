
import { ag } from '../../attribute-groups';

PType({
    name: 'Beach chair',
    key: 'beachchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});