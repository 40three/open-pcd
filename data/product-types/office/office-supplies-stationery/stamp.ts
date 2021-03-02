
import { ag } from '../../../attribute-groups';

PType({
    name: 'Stamp',
    key: 'stamp',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});