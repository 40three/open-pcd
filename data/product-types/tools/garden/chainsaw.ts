import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeChainsaw = PType({
    name: 'Chainsaw',
    key: 'chainsaw',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});