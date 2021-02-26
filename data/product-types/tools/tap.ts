
import { ag } from '../../../attribute-groups';

PType({
    name: 'Tap',
    key: 'tap',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});