
import { ag } from '../../../attribute-groups';

PType({
    name: 'Beamer',
    key: 'projector',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});