
import { ag } from '../../../attribute-groups';

PType({
    name: 'Adhesive tape',
    key: 'adhesivetape',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});