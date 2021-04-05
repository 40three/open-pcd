
import { ag } from '../../attribute-groups';

PType({
    name: 'Comfort armchair',
    key: 'comfortarmchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});