import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeFoodProcessor = PType({
    name: 'Food processor',
    key: 'foodprocessor',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});