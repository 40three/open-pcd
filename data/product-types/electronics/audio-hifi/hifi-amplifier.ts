import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHifiAmplifier = PType({
    name: 'HiFi amplifier',
    key: 'hifiamplfier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});