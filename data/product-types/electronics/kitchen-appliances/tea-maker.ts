
import { ag } from '../../../attribute-groups';

export const productTypeTeaMakers = PType({
    name: 'Tea maker',
    key: 'teamaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});