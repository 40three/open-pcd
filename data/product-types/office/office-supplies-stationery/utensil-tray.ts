
import { ag } from '../../../attribute-groups';

PType({
    name: 'Utensil tray',
    key: 'utensiltray',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});