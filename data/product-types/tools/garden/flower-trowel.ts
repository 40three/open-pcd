import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeFlowerTrowel = PType({
    name: 'Flower trowel',
    key: 'flowertrowel',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});