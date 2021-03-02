
import { ag } from '../../../attribute-groups';

PType({
    name: 'Receipt book',
    key: 'receiptbook',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});