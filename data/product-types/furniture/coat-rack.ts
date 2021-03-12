
import { ag } from '../../attribute-groups';

PType({
    name: 'Coat rack',
    key: 'coatrack',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});