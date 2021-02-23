
import { ag } from '../../../attribute-groups';

export const productTypeSandwichMaker = PType({
    name: 'Sandwich maker',
    key: 'sandwichmaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});