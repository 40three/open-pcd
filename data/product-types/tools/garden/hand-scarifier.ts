import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHandScarifier = PType({
    name: 'Hand scarifier',
    key: 'handscarifier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});