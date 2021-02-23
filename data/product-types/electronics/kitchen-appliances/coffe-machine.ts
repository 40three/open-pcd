
import { ag } from '../../../attribute-groups';

PType({
    name: 'Coffee machine',
    key: 'coffeemachine',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});