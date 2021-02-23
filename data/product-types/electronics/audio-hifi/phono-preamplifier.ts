import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePhonoPreamplifier = PType({
    name: 'Phono preamplifier',
    key: 'phonopreamplfier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});