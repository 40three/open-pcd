
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cutting tool',
    key: 'cuttingtool',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});