
import { ag } from '../../../attribute-groups';

export const productTypeSteamer = PType({
    name: 'Steamer',
    key: 'steamer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});