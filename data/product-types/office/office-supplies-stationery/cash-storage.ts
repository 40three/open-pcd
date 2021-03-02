
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cash storage',
    key: 'cashstorage',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});