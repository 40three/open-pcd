
import { ag } from '../../../attribute-groups';

PType({
    name: 'Film sealer',
    key: 'filmsealer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});