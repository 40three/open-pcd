import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeCultivator = PType({
    name: 'Cultivator',
    key: 'cultivator',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});