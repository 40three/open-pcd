
import { ag } from '../../../attribute-groups';

PType({
    name: 'Waffle iron',
    key: 'waffleiron',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});