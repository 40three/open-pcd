
import { ag } from '../../../attribute-groups';

PType({
    name: 'Alarm systems',
    key: 'alarmsystems',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});