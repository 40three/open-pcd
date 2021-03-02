
import { ag } from '../../../attribute-groups';

PType({
    name: 'Order form',
    key: 'order form',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});