
import { ag } from '../../../attribute-groups';

PType({
    name: 'Microwave',
    key: 'microwave',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});