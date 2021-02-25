import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeLeafBlower = PType({
    name: 'Leaf blower',
    key: 'leafblower',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});