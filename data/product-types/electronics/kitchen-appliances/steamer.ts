
import { ag } from '../../../attribute-groups';

PType({
    name: 'Steamer',
    key: 'steamer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});