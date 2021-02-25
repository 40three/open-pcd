
import { ag } from '../../../attribute-groups';

PType({
    name: 'Plug',
    key: 'plug',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});