
import { ag } from '../../../attribute-groups';

PType({
    name: 'Adhesive',
    key: 'adhesive',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});