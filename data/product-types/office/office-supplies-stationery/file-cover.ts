
import { ag } from '../../../attribute-groups';

PType({
    name: 'File cover',
    key: 'filecover',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});