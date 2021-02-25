import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGrapple = PType({
    name: 'Grapple',
    key: 'grapple',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});