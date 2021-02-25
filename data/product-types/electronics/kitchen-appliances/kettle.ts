
import { ag } from '../../../attribute-groups';

PType({
    name: 'Kettle',
    key: 'kettle',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});