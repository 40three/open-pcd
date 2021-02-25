
import { ag } from '../../../attribute-groups';

PType({
    name: 'Dimmer',
    key: 'dimmer',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});