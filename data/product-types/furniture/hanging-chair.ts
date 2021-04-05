
import { ag } from '../../attribute-groups';

PType({
    name: 'Hanging chair',
    key: 'hangingchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});