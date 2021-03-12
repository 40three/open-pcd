
import { ag } from '../../attribute-groups';

PType({
    name: 'Office supplie',
    key: 'officesupplie',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});