
import { ag } from '../../attribute-groups';

PType({
    name: 'Standing aid',
    key: 'standingaid',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});