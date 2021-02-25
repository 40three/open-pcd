import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSpade = PType({
    name: 'Spade',
    key: 'spade',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});