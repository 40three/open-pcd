
import { ag } from '../../../attribute-groups';

PType({
    name: 'Index card',
    key: 'indexcard',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});