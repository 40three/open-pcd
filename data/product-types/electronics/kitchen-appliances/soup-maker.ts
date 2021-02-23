
import { ag } from '../../../attribute-groups';

export const productTypeSoupMaker = PType({
    name: 'Soup maker',
    key: 'soupmaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});