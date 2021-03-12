
import { ag } from '../../attribute-groups';

PType({
    name: 'Sideboard',
    key: 'sideboard',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});