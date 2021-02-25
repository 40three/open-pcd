import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeRakes = PType({
    name: 'Rakes',
    key: 'rakes',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});