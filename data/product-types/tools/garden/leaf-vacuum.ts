import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeLeafVacuum = PType({
    name: 'Leaf vacuum',
    key: 'leafvacuum',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});