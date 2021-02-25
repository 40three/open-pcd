import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHub = PType({
    name: 'Hub',
    key: 'hub',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});