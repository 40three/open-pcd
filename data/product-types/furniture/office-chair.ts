
import { ag } from '../../attribute-groups';

PType({
    name: 'Office chair',
    key: 'officechair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});