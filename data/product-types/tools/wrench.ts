
import { ag } from '../../../attribute-groups';

PType({
    name: 'Wrench',
    key: 'wrench',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});