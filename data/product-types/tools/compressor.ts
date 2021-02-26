
import { ag } from '../../../attribute-groups';

PType({
    name: 'Compressor',
    key: 'compressor',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});