
import { ag } from '../../../attribute-groups';

PType({
    name: 'Snow shovel',
    key: 'snowshovel',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});