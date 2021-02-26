
import { ag } from '../../../attribute-groups';

PType({
    name: 'Milling machine',
    key: 'millingmachine',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});