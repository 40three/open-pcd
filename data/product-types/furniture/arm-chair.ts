
import { ag } from '../../attribute-groups';

PType({
    name: 'Arm chair',
    key: 'armchair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});