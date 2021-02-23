import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeStirrer = PType({
    name: 'Stirrer',
    key: 'stirrer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});