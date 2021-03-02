
import { ag } from '../../../attribute-groups';

PType({
    name: 'Fastener',
    key: 'fastener',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});