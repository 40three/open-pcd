
import { ag } from '../../../attribute-groups';

PType({
    name: 'Food processor',
    key: 'foodprocessor',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});