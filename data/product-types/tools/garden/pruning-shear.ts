import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePruningShear = PType({
    name: 'Pruning shear',
    key: 'pruningshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});