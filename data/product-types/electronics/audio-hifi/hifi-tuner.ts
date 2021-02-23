import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHifiTuner = PType({
    name: 'HiFi tuner',
    key: 'hifituner',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});