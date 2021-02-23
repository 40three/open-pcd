
import { ag } from '../../../attribute-groups';

PType({
    name: 'Tea maker',
    key: 'teamaker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});