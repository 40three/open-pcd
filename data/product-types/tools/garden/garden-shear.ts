import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenShear = PType({
    name: 'Garden shear',
    key: 'gardenshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});