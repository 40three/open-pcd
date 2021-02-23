
import { ag } from '../../../attribute-groups';

PType({
    name: 'Deep fryer',
    key: 'deepfryer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});