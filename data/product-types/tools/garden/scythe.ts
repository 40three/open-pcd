import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeScythe = PType({
    name: 'Scythe',
    key: 'scythe',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});