
import { ag } from '../../attribute-groups';

PType({
    name: 'Rocking chair',
    key: 'rockingchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});