
import { ag } from '../../../attribute-groups';

PType({
    name: 'Tv receiver',
    key: 'tvReceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});