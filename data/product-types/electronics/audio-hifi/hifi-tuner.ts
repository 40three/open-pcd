
import { ag } from '../../../attribute-groups';

PType({
    name: 'HiFi tuner',
    key: 'hifiTuner',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});