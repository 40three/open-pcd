
import { ag } from '../../../attribute-groups';

PType({
    name: 'Indoor grill',
    key: 'indoorgrill',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});