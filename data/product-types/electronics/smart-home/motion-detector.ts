
import { ag } from '../../../attribute-groups';

PType({
    name: 'Motion detector',
    key: 'motiondetector',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});