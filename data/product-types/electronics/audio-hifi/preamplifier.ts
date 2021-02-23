import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePreamplifier = PType({
    name: 'Preamplifier',
    key: 'preamplfier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});