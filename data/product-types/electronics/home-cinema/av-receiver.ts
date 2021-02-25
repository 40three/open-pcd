
import { ag } from '../../../attribute-groups';

PType({
    name: 'Av receiver',
    key: 'avreceiver',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});