
import { ag } from '../../../attribute-groups';

PType({
    name: 'Coin counter',
    key: 'coincounter',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});