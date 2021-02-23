
import { ag } from '../../../attribute-groups';

export const productTypeBreadmaker = PType({
    name: 'Breadmaker',
    key: 'breadmaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});