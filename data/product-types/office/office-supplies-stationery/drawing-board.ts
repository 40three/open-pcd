
import { ag } from '../../../attribute-groups';

PType({
    name: 'Drawing board',
    key: 'drawingboard',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});