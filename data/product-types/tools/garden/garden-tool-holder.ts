import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenToolHolder = PType({
    name: 'Garden tool holder',
    key: 'gardentoolholder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});