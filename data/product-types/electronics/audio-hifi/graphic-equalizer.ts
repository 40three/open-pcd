import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGraphicEqualizer = PType({
    name: 'Graphic equalizer',
    key: 'graphicequalizer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});