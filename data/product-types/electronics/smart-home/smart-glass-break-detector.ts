
import { ag } from '../../../attribute-groups';

PType({
    name: 'Smart glass break detector',
    key: 'smartglassbreakdetector',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});