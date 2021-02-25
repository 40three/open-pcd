
import { ag } from '../../../attribute-groups';

PType({
    name: 'Stirrer',
    key: 'stirrer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});