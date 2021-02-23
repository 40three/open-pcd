
import { ag } from '../../../attribute-groups';

PType({
    name: 'HiFi receiver',
    key: 'hifiReceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});