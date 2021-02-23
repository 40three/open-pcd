
import { ag } from '../../../attribute-groups';

PType({
    name: 'Soup maker',
    key: 'soupmaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});