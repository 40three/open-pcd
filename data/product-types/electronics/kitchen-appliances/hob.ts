
import { ag } from '../../../attribute-groups';

PType({
    name: 'Hob',
    key: 'hob',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});