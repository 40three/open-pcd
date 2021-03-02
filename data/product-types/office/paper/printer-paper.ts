
import { ag } from '../../../attribute-groups';

PType({
    name: 'Printer paper',
    key: 'printerpaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});