
import { ag } from '../../../attribute-groups';

PType({
    name: 'Grinder',
    key: 'grinder',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});