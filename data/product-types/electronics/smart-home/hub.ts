
import { ag } from '../../../attribute-groups';

PType({
    name: 'Hub',
    key: 'hub',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});