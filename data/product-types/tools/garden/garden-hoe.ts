import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenHoe = PType({
    name: 'Garden hoe',
    key: 'gardenhoe',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});