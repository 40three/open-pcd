
import { ag } from '../../../attribute-groups';

PType({
    name: 'Lantern',
    key: 'lantern',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});