import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePickaxe = PType({
    name: 'Pickaxe',
    key: 'pickaxe',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});