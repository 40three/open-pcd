
import { ag } from '../../../attribute-groups';

PType({
    name: 'Flashlight',
    key: 'flashlight',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});