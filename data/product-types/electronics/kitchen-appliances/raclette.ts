
import { ag } from '../../../attribute-groups';

PType({
    name: 'Raclette',
    key: 'raclette',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});