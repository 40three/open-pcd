
import { ag } from '../../attribute-groups';

PType({
    name: 'Loveseat',
    key: 'loveseat',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});