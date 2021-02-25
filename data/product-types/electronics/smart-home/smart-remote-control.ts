
import { ag } from '../../../attribute-groups';

PType({
    name: 'Smart remote control',
    key: 'smartremotecontrol',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});