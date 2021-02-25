import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeEdgeShear = PType({
    name: 'Edge shear',
    key: 'edgeshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});