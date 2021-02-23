
import { ag } from '../../../attribute-groups';

export const productTypeWaffleIron = PType({
    name: 'Waffle iron',
    key: 'waffleiron',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});