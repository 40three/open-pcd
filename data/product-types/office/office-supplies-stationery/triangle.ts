
import { ag } from '../../../attribute-groups';

PType({
    name: 'Triangle',
    key: 'triangle',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});