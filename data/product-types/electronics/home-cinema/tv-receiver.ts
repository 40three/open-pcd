
import { ag } from '../../../attribute-groups';

export const productTypeTvReceiver = PType({
    name: 'Tv receiver',
    key: 'tvreceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});