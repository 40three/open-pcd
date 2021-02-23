import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeChocolateFountain = PType({
    name: 'Chocolate fountain',
    key: 'chocolatefountain',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});