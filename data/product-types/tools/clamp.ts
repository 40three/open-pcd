
import { ag } from '../../../attribute-groups';

PType({
    name: 'Clamp',
    key: 'clamp',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});