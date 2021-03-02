
import { ag } from '../../../attribute-groups';

PType({
    name: 'Note box',
    key: 'notebox',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});