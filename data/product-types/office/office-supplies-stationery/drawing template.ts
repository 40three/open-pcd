
import { ag } from '../../../attribute-groups';

PType({
    name: 'Drawing template',
    key: 'drawingtemplate',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});