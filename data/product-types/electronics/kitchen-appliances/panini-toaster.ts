
import { ag } from '../../../attribute-groups';

export const productTypePaniniToaster = PType({
    name: 'Panini toaster',
    key: 'paninitoaster',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});