
import { ag } from '../../../attribute-groups';

PType({
    name: 'Laminating film',
    key: 'laminatingfilm',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});