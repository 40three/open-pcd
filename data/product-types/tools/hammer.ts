
import { ag } from '../../../attribute-groups';

PType({
    name: 'Hammer',
    key: 'hammer',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});