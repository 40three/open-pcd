
import { ag } from '../../../attribute-groups';

PType({
    name: 'Drawing paper',
    key: 'drawingpaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});