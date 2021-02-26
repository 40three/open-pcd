
import { ag } from '../../../attribute-groups';

PType({
    name: 'Headlamp',
    key: 'headlamp',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});