
import { ag } from '../../../attribute-groups';

PType({
    name: 'Puller',
    key: 'puller',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});