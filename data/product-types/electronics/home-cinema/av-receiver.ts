
import { ag } from '../../../attribute-groups';

export const productTypeAvReceiver = PType({
    name: 'Av receiver',
    key: 'avreceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});