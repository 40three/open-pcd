
import { ag } from '../../../attribute-groups';

PType({
    name: 'Projector (video)',
    key: 'projector',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});