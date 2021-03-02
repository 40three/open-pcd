
import { ag } from '../../../attribute-groups';

PType({
    name: 'Staple',
    key: 'staple',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});