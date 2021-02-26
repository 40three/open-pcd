
import { ag } from '../../../attribute-groups';

PType({
    name: 'Plan tool',
    key: 'plantool',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});