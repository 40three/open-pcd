
import { ag } from '../../../attribute-groups';

PType({
    name: 'Toaster',
    key: 'toaster',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});