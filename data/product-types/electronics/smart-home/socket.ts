
import { ag } from '../../../attribute-groups';

PType({
    name: 'Socket',
    key: 'socket',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});