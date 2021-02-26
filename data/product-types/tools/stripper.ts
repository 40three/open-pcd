
import { ag } from '../../../attribute-groups';

PType({
    name: 'Stripper',
    key: 'stripper',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});