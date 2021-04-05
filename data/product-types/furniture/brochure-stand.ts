
import { ag } from '../../attribute-groups';

PType({
    name: 'Brochure stand',
    key: 'brochurestand',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});