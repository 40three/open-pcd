
import { ag } from '../../../attribute-groups';

PType({
    name: 'Juicer',
    key: 'juicer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});