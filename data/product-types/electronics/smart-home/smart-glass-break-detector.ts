import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSmartGlassBreakDetector = PType({
    name: 'Smart glass break detector',
    key: 'smartglassbreakdetector',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});