
import { ag } from '../../../attribute-groups';

PType({
    name: 'Class book',
    key: 'classbook',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});