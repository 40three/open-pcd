
import { ag } from '../../../attribute-groups';

PType({
    name: 'Invoice form',
    key: 'invoiceform',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});