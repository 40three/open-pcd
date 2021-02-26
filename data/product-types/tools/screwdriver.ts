
import { ag } from '../../../attribute-groups';

PType({
    name: 'Screwdriver',
    key: 'screwdriver',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});