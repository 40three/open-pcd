
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cutter',
    key: 'cutter',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});