import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeShovel = PType({
    name: 'Shovel',
    key: 'shovel',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});