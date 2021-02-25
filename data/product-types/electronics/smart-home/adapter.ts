
import { ag } from '../../../attribute-groups';

PType({
    name: 'Adapter',
    key: 'adapter',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});