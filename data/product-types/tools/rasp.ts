
import { ag } from '../../../attribute-groups';

PType({
    name: 'Rasp',
    key: 'rasp',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});