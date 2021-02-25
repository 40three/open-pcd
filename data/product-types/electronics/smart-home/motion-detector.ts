import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeMotionDetector = PType({
    name: 'Motion detector',
    key: 'motiondetector',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});