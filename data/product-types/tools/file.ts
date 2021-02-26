
import { ag } from '../../../attribute-groups';

PType({
    name: 'File',
    key: 'file',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});