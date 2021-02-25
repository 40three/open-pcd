import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenBroom = PType({
    name: 'Garden broom',
    key: 'gardenbroom',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});