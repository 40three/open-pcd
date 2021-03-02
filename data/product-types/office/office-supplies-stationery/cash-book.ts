
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cash book',
    key: 'cashbook',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});