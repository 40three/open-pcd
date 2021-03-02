
import { ag } from '../../../attribute-groups';

PType({
    name: 'Stapler',
    key: 'stapler',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});