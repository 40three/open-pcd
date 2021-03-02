
import { ag } from '../../../attribute-groups';

PType({
    name: 'Name tag',
    key: 'nametag',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});