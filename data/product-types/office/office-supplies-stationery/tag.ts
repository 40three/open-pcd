
import { ag } from '../../../attribute-groups';

PType({
    name: 'Tag',
    key: 'tag',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});