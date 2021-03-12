
import { ag } from '../../attribute-groups';

PType({
    name: 'Folding chair',
    key: 'foldingchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});