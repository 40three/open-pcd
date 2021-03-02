
import { ag } from '../../../attribute-groups';

PType({
    name: 'Fountain pen',
    key: 'fountainpen',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});