
import { ag } from '../../../attribute-groups';

PType({
    name: 'Thumbtack',
    key: 'thumbtack',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});