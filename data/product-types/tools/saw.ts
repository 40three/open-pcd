
import { ag } from '../../../attribute-groups';

PType({
    name: 'Saw',
    key: 'saw',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});