import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHandSaw = PType({
    name: 'Hand saw',
    key: 'handsaw',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});