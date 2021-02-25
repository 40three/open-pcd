import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeMulcher = PType({
    name: 'Mulcher',
    key: 'mulcher',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});