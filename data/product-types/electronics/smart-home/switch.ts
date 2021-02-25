
import { ag } from '../../../attribute-groups';

PType({
    name: 'Switch',
    key: 'switch',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});