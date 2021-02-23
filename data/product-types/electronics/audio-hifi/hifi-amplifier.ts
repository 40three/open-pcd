
import { ag } from '../../../attribute-groups';

PType({
    name: 'HiFi amplifier',
    key: 'hifiAmplifier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});