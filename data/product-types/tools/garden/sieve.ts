import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSieve = PType({
    name: 'Sieve',
    key: 'sieve',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});