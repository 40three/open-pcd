import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenFork = PType({
    name: 'Garden fork',
    key: 'gardenfork',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});