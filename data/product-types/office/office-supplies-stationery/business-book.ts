
import { ag } from '../../../attribute-groups';

PType({
    name: 'Business book',
    key: 'business book',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});