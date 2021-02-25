
import { ag } from '../../../attribute-groups';

PType({
    name: 'Chocolate fountain',
    key: 'chocolatefountain',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});