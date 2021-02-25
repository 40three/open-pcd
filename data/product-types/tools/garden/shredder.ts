import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeShredder = PType({
    name: 'Shredder',
    key: 'shredder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});