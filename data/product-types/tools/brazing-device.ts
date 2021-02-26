
import { ag } from '../../../attribute-groups';

PType({
    name: 'Brazing device',
    key: 'brazingdevice',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});