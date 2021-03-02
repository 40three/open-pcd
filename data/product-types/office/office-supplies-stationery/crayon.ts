
import { ag } from '../../../attribute-groups';

PType({
    name: 'Crayon',
    key: 'crayon',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});