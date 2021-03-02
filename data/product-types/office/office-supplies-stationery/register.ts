
import { ag } from '../../../attribute-groups';

PType({
    name: 'Register',
    key: 'register',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});