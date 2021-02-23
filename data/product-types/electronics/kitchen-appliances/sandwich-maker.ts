
import { ag } from '../../../attribute-groups';

PType({
    name: 'Sandwich maker',
    key: 'sandwichmaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});