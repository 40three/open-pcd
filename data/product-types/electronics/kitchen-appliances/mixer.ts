
import { ag } from '../../../attribute-groups';

PType({
    name: 'Mixer',
    key: 'mixer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});