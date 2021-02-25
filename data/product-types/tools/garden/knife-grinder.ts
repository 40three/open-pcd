import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeKnifeGrinder = PType({
    name: 'Knife grinder',
    key: 'knifegrinder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});