import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeCompostAerator = PType({
    name: 'Compost Aerator',
    key: 'compostaerator',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});