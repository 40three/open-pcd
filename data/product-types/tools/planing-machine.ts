
import { ag } from '../../../attribute-groups';

PType({
    name: 'Planing machine',
    key: 'planingmachine',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});