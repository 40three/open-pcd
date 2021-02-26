
import { ag } from '../../../attribute-groups';

PType({
    name: 'Planer',
    key: 'planer',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});