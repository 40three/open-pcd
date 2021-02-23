
import { ag } from '../../../attribute-groups';

export const productTypeHifiReceiver = PType({
    name: 'HiFi receiver',
    key: 'hifireceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});