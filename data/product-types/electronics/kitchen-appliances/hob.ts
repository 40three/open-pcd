import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHob = PType({
    name: 'Hob',
    key: 'hob',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});